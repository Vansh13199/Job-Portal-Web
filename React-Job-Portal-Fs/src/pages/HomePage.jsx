import { useState, useCallback, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import PostJob from '../components/PostJob';
import JobList from '../components/JobList';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { initialJobListings } from '../data/jobListings';

const locationMap = {
    bangalore: 'Bangalore', mumbai: 'Mumbai', pune: 'Pune',
    hyderabad: 'Hyderabad', delhi: 'Delhi NCR', remote: 'Remote'
};

const roleLabels = {
    frontend: 'Frontend Developer', backend: 'Backend Developer',
    fullstack: 'Full Stack Developer', uiux: 'UI/UX Designer',
    data: 'Data Analyst', devops: 'DevOps Engineer', intern: 'Intern'
};

const typeLabels = {
    'full-time': 'Full-time', 'part-time': 'Part-time',
    'internship': 'Internship', 'contract': 'Contract'
};

const salaryLabels = {
    '0-3': '0 – 3 LPA', '3-6': '3 – 6 LPA',
    '6-10': '6 – 10 LPA', '10+': '10+ LPA'
};

export default function HomePage() {
    const [jobListings, setJobListings] = useState([...initialJobListings]);
    const [filters, setFilters] = useState({ keyword: '', role: '', location: '', type: '', salary: '' });
    const [toastMessage, setToastMessage] = useState('');
    const [formData, setFormData] = useState({ title: '', company: '', location: '', description: '', type: '', salary: '' });
    const nextIdRef = useRef(13);

    const handleFilterChange = useCallback((key, value) => {
        setFilters(prev => {
            const updated = { ...prev, [key]: value };
            return updated;
        });
    }, []);

    // Build active filters for display
    const getActiveFilters = () => {
        const active = [];
        if (filters.keyword) active.push({ label: `"${filters.keyword}"`, filterKey: 'keyword' });
        if (filters.role) active.push({ label: roleLabels[filters.role] || filters.role, filterKey: 'role' });
        if (filters.location) active.push({ label: locationMap[filters.location] || filters.location, filterKey: 'location' });
        if (filters.type) active.push({ label: typeLabels[filters.type] || filters.type, filterKey: 'type' });
        if (filters.salary) active.push({ label: salaryLabels[filters.salary] || filters.salary, filterKey: 'salary' });
        return active;
    };

    const getFilteredJobs = () => {
        const { keyword, role, location, type, salary } = filters;
        return jobListings.filter(job => {
            if (keyword) {
                const kw = keyword.toLowerCase();
                const haystack = `${job.title} ${job.company} ${job.description} ${job.tags.join(' ')}`.toLowerCase();
                if (!haystack.includes(kw)) return false;
            }
            if (role && job.role !== role) return false;
            if (location && job.location.toLowerCase() !== locationMap[location]?.toLowerCase()) return false;
            if (type && job.type !== type) return false;
            if (salary && job.salary !== salary) return false;
            return true;
        });
    };

    const handleSearch = () => {
        // Filters are already reactive, this triggers a re-render
        setFilters(prev => ({ ...prev }));
    };

    const handleClear = () => {
        setFilters({ keyword: '', role: '', location: '', type: '', salary: '' });
    };

    const handleClearFilter = (filterKey) => {
        setFilters(prev => ({ ...prev, [filterKey]: '' }));
    };

    const handleDelete = (jobId) => {
        setJobListings(prev => prev.filter(j => j.id !== jobId));
    };

    const handleEdit = (job) => {
        setFormData({
            title: job.title,
            company: job.company,
            location: job.location,
            description: job.description,
            type: job.type,
            salary: job.salary
        });
        setJobListings(prev => prev.filter(j => j.id !== job.id));
        document.getElementById('post-job')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleApply = (job) => {
        setToastMessage(`Applied to ${job.title} at ${job.company}!`);
    };

    const handleFormChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handlePostJob = (e) => {
        e.preventDefault();
        const { title, company, location, description, type, salary } = formData;
        if (!title || !company || !location || !description || !type || !salary) return;

        const newJob = {
            id: nextIdRef.current++,
            title, company, location, description, type, salary,
            role: '',
            postedDate: new Date().toISOString().split('T')[0],
            tags: []
        };

        setJobListings(prev => [newJob, ...prev]);
        setFormData({ title: '', company: '', location: '', description: '', type: '', salary: '' });
        setToastMessage('Job posted successfully!');
        setTimeout(() => {
            document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const filteredJobs = getFilteredJobs();
    const activeFilters = getActiveFilters();

    return (
        <div className="font-poppins bg-light-bg text-gray-800 overflow-x-hidden scroll-smooth">
            <Navbar />
            <Hero />
            <main>
                <SearchBar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onSearch={handleSearch}
                    onClear={handleClear}
                />
                <PostJob
                    formData={formData}
                    onFormChange={handleFormChange}
                    onSubmit={handlePostJob}
                />
                <JobList
                    jobs={filteredJobs}
                    totalCount={jobListings.length}
                    activeFilters={activeFilters}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onApply={handleApply}
                    onClearFilter={handleClearFilter}
                />
            </main>
            <Footer />
            <Toast message={toastMessage} onDone={() => setToastMessage('')} />
        </div>
    );
}
