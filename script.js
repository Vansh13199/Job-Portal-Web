document.addEventListener('DOMContentLoaded', () => {
    const jobListings = [
        {
            id: 1, title: 'Frontend Developer', company: 'TechSoft',
            location: 'Remote', role: 'frontend', type: 'full-time',
            salary: '6-10', postedDate: '2026-02-20',
            description: 'We are looking for a skilled Frontend Developer with React and TypeScript experience to build modern web interfaces.',
            tags: ['React', 'TypeScript', 'CSS']
        },
        {
            id: 2, title: 'Backend Developer', company: 'CodeWorks',
            location: 'Bangalore', role: 'backend', type: 'full-time',
            salary: '6-10', postedDate: '2026-02-18',
            description: 'Join our backend team to build scalable RESTful APIs and microservices using Node.js and PostgreSQL.',
            tags: ['Node.js', 'PostgreSQL', 'REST']
        },
        {
            id: 3, title: 'Full Stack Developer', company: 'InnovateTech',
            location: 'Mumbai', role: 'fullstack', type: 'full-time',
            salary: '10+', postedDate: '2026-02-21',
            description: 'Build end-to-end features across our React frontend and Python/Django backend for a fast-growing SaaS product.',
            tags: ['React', 'Django', 'AWS']
        },
        {
            id: 4, title: 'UI/UX Designer', company: 'DesignLab',
            location: 'Pune', role: 'uiux', type: 'full-time',
            salary: '6-10', postedDate: '2026-02-19',
            description: 'Create stunning user experiences and design systems for our suite of enterprise applications using Figma.',
            tags: ['Figma', 'Design Systems', 'Prototyping']
        },
        {
            id: 5, title: 'Data Analyst Intern', company: 'DataMinds',
            location: 'Hyderabad', role: 'data', type: 'internship',
            salary: '0-3', postedDate: '2026-02-22',
            description: 'Analyse large datasets, create dashboards in Power BI, and assist the data science team with insights.',
            tags: ['Python', 'Power BI', 'SQL']
        },
        {
            id: 6, title: 'DevOps Engineer', company: 'CloudNine',
            location: 'Remote', role: 'devops', type: 'contract',
            salary: '10+', postedDate: '2026-02-17',
            description: 'Design and maintain CI/CD pipelines, manage Kubernetes clusters, and automate infrastructure on AWS.',
            tags: ['AWS', 'Kubernetes', 'Terraform']
        },
        {
            id: 7, title: 'React Native Developer', company: 'AppFactory',
            location: 'Delhi', role: 'frontend', type: 'full-time',
            salary: '6-10', postedDate: '2026-02-16',
            description: 'Develop cross-platform mobile apps using React Native for our fintech product reaching millions of users.',
            tags: ['React Native', 'JavaScript', 'Mobile']
        },
        {
            id: 8, title: 'Backend Intern', company: 'StartupHub',
            location: 'Bangalore', role: 'intern', type: 'internship',
            salary: '0-3', postedDate: '2026-02-23',
            description: 'Learn and contribute to real-world projects. Work with Express.js, MongoDB, and build REST APIs from scratch.',
            tags: ['Express.js', 'MongoDB', 'REST']
        },
        {
            id: 9, title: 'Part-Time Frontend Dev', company: 'FlexiWork',
            location: 'Remote', role: 'frontend', type: 'part-time',
            salary: '3-6', postedDate: '2026-02-15',
            description: 'Work 20 hours/week building responsive landing pages and dashboards with HTML, CSS, and Vue.js.',
            tags: ['Vue.js', 'HTML', 'CSS']
        },
        {
            id: 10, title: 'Senior Data Analyst', company: 'InsightCorp',
            location: 'Pune', role: 'data', type: 'full-time',
            salary: '10+', postedDate: '2026-02-14',
            description: 'Lead analytics projects, mentor junior analysts, and drive data-informed decisions using advanced Python and Tableau.',
            tags: ['Python', 'Tableau', 'Machine Learning']
        },
        {
            id: 11, title: 'UI/UX Intern', company: 'CreativeMinds',
            location: 'Mumbai', role: 'uiux', type: 'internship',
            salary: '0-3', postedDate: '2026-02-13',
            description: 'Assist the design team with wireframing, user research, and creating hi-fi mockups in Figma and Adobe XD.',
            tags: ['Figma', 'Adobe XD', 'User Research']
        },
        {
            id: 12, title: 'Full Stack Contract Dev', company: 'Freelancia',
            location: 'Remote', role: 'fullstack', type: 'contract',
            salary: '6-10', postedDate: '2026-02-12',
            description: '6-month contract to build a MERN-stack e-commerce platform with payment integration and admin panel.',
            tags: ['MERN', 'Stripe', 'Redux']
        }
    ];

    let nextId = 13;

    const keywordInput = document.getElementById('keyword-search');
    const roleSelect = document.getElementById('job-role');
    const locationSelect = document.getElementById('job-location');
    const typeSelect = document.getElementById('job-type');
    const salarySelect = document.getElementById('salary-range');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsContainer = document.getElementById('search-results');
    const resultsCount = document.getElementById('results-count');
    const activeFiltersEl = document.getElementById('active-filters');
    const emptyState = document.getElementById('empty-state');
    const jobForm = document.getElementById('job-form');

    const locationMap = {
        bangalore: 'Bangalore', mumbai: 'Mumbai', pune: 'Pune',
        hyderabad: 'Hyderabad', delhi: 'Delhi NCR', remote: 'Remote'
    };

    const typeBadgeColors = {
        'full-time': 'bg-green-500/10 text-green-800',
        'part-time': 'bg-blue-500/10 text-blue-800',
        'internship': 'bg-orange-500/10 text-orange-900',
        'contract': 'bg-purple-500/10 text-purple-800',
    };

    function filterJobs() {
        const keyword = keywordInput.value.trim().toLowerCase();
        const role = roleSelect.value;
        const location = locationSelect.value;
        const type = typeSelect.value;
        const salary = salarySelect.value;

        const filtered = jobListings.filter(job => {
            if (keyword) {
                const haystack = `${job.title} ${job.company} ${job.description} ${job.tags.join(' ')}`.toLowerCase();
                if (!haystack.includes(keyword)) return false;
            }
            if (role && job.role !== role) return false;
            if (location && job.location.toLowerCase() !== locationMap[location]?.toLowerCase()) return false;
            if (type && job.type !== type) return false;
            if (salary && job.salary !== salary) return false;
            return true;
        });

        renderJobs(filtered);
        renderActiveFilters(keyword, role, location, type, salary);
    }

    function renderJobs(jobs) {
        resultsContainer.innerHTML = '';

        if (jobs.length === 0) {
            emptyState.style.display = 'flex';
            resultsCount.textContent = 'No jobs match your search';
        } else {
            emptyState.style.display = 'none';
            resultsCount.textContent = `Showing ${jobs.length} of ${jobListings.length} jobs`;
        }

        jobs.forEach((job, index) => {
            const card = document.createElement('div');
            card.className = 'bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 relative overflow-hidden hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] before:content-[\'\'] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary animate-fadeInCard';
            card.style.animationDelay = `${index * 0.07}s`;

            const badgeColor = typeBadgeColors[job.type] || 'bg-gray-100 text-gray-700';
            const salaryLabel = getSalaryLabel(job.salary);
            const daysAgo = getDaysAgo(job.postedDate);

            card.innerHTML = `
                <div class="flex justify-between items-center mb-3">
                    <span class="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide ${badgeColor}">${formatType(job.type)}</span>
                    <span class="text-xs text-gray-400 flex items-center gap-1"><i class="far fa-clock"></i> ${daysAgo}</span>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">${job.title}</h3>
                <p class="text-gray-500 text-sm mb-1 flex items-center gap-2"><i class="fas fa-building"></i> ${job.company}</p>
                <p class="text-gray-500 text-sm mb-1 flex items-center gap-2"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                <p class="my-4 text-gray-600 text-sm leading-relaxed">${job.description}</p>
                <div class="flex flex-wrap gap-1.5 mt-3">
                    ${job.tags.map(t => `<span class="py-0.5 px-2.5 bg-gray-100 rounded-xl text-xs text-gray-500 font-medium">${t}</span>`).join('')}
                </div>
                <div class="flex justify-between items-center mt-5 flex-wrap gap-2.5 max-md:flex-col max-md:items-start">
                    <span class="text-sm font-semibold text-primary flex items-center gap-1"><i class="fas fa-indian-rupee-sign"></i> ${salaryLabel}</span>
                    <div class="flex gap-2.5 flex-wrap">
                        <button class="apply-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-gray-200 text-gray-800 hover:bg-gray-300">Apply Now</button>
                        <button class="edit-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white">Edit</button>
                        <button class="delete-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
                    </div>
                </div>
            `;

            card.querySelector('.delete-btn').addEventListener('click', () => {
                card.classList.add('card-exit');
                card.addEventListener('animationend', () => {
                    const idx = jobListings.findIndex(j => j.id === job.id);
                    if (idx > -1) jobListings.splice(idx, 1);
                    filterJobs();
                }, { once: true });
            });

            card.querySelector('.edit-btn').addEventListener('click', () => {
                document.getElementById('title').value = job.title;
                document.getElementById('company').value = job.company;
                document.getElementById('location').value = job.location;
                document.getElementById('description').value = job.description;
                document.getElementById('post-job-type').value = job.type;
                document.getElementById('post-salary-range').value = job.salary;

                const idx = jobListings.findIndex(j => j.id === job.id);
                if (idx > -1) jobListings.splice(idx, 1);
                filterJobs();
                document.getElementById('post-job').scrollIntoView({ behavior: 'smooth' });
            });

            card.querySelector('.apply-btn').addEventListener('click', () => {
                showToast(`Applied to ${job.title} at ${job.company}!`);
            });

            resultsContainer.appendChild(card);
        });
    }

    function renderActiveFilters(keyword, role, location, type, salary) {
        activeFiltersEl.innerHTML = '';
        const filters = [];
        if (keyword) filters.push({ label: `"${keyword}"`, clear: () => { keywordInput.value = ''; } });
        if (role) filters.push({ label: roleSelect.options[roleSelect.selectedIndex].text, clear: () => { roleSelect.value = ''; } });
        if (location) filters.push({ label: locationSelect.options[locationSelect.selectedIndex].text, clear: () => { locationSelect.value = ''; } });
        if (type) filters.push({ label: typeSelect.options[typeSelect.selectedIndex].text, clear: () => { typeSelect.value = ''; } });
        if (salary) filters.push({ label: salarySelect.options[salarySelect.selectedIndex].text, clear: () => { salarySelect.value = ''; } });

        filters.forEach(f => {
            const chip = document.createElement('span');
            chip.className = 'inline-flex items-center gap-1.5 py-1 px-3.5 bg-primary/10 text-primary rounded-full text-xs font-medium cursor-pointer transition-colors duration-300 hover:bg-primary/20';
            chip.innerHTML = `${f.label} <i class="fas fa-times text-[0.65rem]"></i>`;
            chip.addEventListener('click', () => { f.clear(); filterJobs(); });
            activeFiltersEl.appendChild(chip);
        });
    }

    function formatType(t) {
        return t.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('-');
    }

    function getSalaryLabel(s) {
        const map = { '0-3': '0 – 3 LPA', '3-6': '3 – 6 LPA', '6-10': '6 – 10 LPA', '10+': '10+ LPA' };
        return map[s] || s;
    }

    function getDaysAgo(dateStr) {
        const diff = Math.floor((new Date() - new Date(dateStr)) / 86400000);
        if (diff <= 0) return 'Today';
        if (diff === 1) return '1 day ago';
        return `${diff} days ago`;
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 translate-y-20 bg-dark-bg text-white py-3.5 px-7 rounded-xl text-sm font-medium z-[9999] shadow-[0_8px_30px_rgba(0,0,0,0.25)] opacity-0 transition-all duration-300 pointer-events-none';
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
        });
        setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.addEventListener('transitionend', () => toast.remove(), { once: true });
        }, 2600);
    }

    searchBtn.addEventListener('click', filterJobs);
    keywordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') filterJobs(); });

    clearBtn.addEventListener('click', () => {
        keywordInput.value = '';
        roleSelect.value = '';
        locationSelect.value = '';
        typeSelect.value = '';
        salarySelect.value = '';
        filterJobs();
    });

    [roleSelect, locationSelect, typeSelect, salarySelect].forEach(sel => {
        sel.addEventListener('change', filterJobs);
    });

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const company = document.getElementById('company').value.trim();
        const location = document.getElementById('location').value.trim();
        const description = document.getElementById('description').value.trim();
        const type = document.getElementById('post-job-type').value;
        const salary = document.getElementById('post-salary-range').value;

        if (!title || !company || !location || !description || !type || !salary) return;

        const newJob = {
            id: nextId++,
            title, company, location, description, type, salary,
            role: '',
            postedDate: new Date().toISOString().split('T')[0],
            tags: []
        };

        jobListings.unshift(newJob);
        jobForm.reset();
        filterJobs();
        showToast('Job posted successfully!');
        document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
    });

    filterJobs();
});
