import { useState, useRef } from 'react';

const typeBadgeColors = {
    'full-time': 'bg-green-500/10 text-green-800',
    'part-time': 'bg-blue-500/10 text-blue-800',
    'internship': 'bg-orange-500/10 text-orange-900',
    'contract': 'bg-purple-500/10 text-purple-800',
};

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

export default function JobCard({ job, index, onDelete, onEdit, onApply }) {
    const [exiting, setExiting] = useState(false);
    const cardRef = useRef(null);

    const badgeColor = typeBadgeColors[job.type] || 'bg-gray-100 text-gray-700';
    const salaryLabel = getSalaryLabel(job.salary);
    const daysAgo = getDaysAgo(job.postedDate);

    const handleDelete = () => {
        setExiting(true);
        const el = cardRef.current;
        if (el) {
            el.addEventListener('animationend', () => {
                onDelete(job.id);
            }, { once: true });
        }
    };

    return (
        <div
            ref={cardRef}
            className={`bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 relative overflow-hidden hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary animate-fadeInCard ${exiting ? 'card-exit' : ''}`}
            style={{ animationDelay: `${index * 0.07}s` }}
        >
            <div className="flex justify-between items-center mb-3">
                <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide ${badgeColor}`}>
                    {formatType(job.type)}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                    <i className="far fa-clock"></i> {daysAgo}
                </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h3>
            <p className="text-gray-500 text-sm mb-1 flex items-center gap-2">
                <i className="fas fa-building"></i> {job.company}
            </p>
            <p className="text-gray-500 text-sm mb-1 flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i> {job.location}
            </p>
            <p className="my-4 text-gray-600 text-sm leading-relaxed">{job.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
                {job.tags.map((t, i) => (
                    <span key={i} className="py-0.5 px-2.5 bg-gray-100 rounded-xl text-xs text-gray-500 font-medium">{t}</span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-5 flex-wrap gap-2.5 max-md:flex-col max-md:items-start">
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                    <i className="fas fa-indian-rupee-sign"></i> {salaryLabel}
                </span>
                <div className="flex gap-2.5 flex-wrap">
                    <button
                        onClick={() => onApply(job)}
                        className="apply-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={() => onEdit(job)}
                        className="edit-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="delete-btn py-2 px-4 border-none rounded-full text-sm cursor-pointer transition-all duration-300 font-medium bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
