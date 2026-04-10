import JobCard from './JobCard';

export default function JobList({ jobs, totalCount, activeFilters, onDelete, onEdit, onApply, onClearFilter }) {
    return (
        <section id="jobs" className="py-20 px-[5%] bg-white">
            <div className="flex items-baseline justify-between flex-wrap gap-2.5 mb-2.5 max-md:flex-col max-md:items-start">
                <h2 className="text-center text-4xl mb-12 text-gray-800 relative section-title">Design Your Future</h2>
                <p id="results-count" className="text-base text-gray-400 font-medium">
                    {jobs.length === 0
                        ? 'No jobs match your search'
                        : `Showing ${jobs.length} of ${totalCount} jobs`}
                </p>
            </div>

            {/* Active filters */}
            <div id="active-filters" className="flex flex-wrap gap-2 mb-5">
                {activeFilters.map((f, i) => (
                    <span
                        key={i}
                        onClick={() => onClearFilter(f.filterKey)}
                        className="inline-flex items-center gap-1.5 py-1 px-3.5 bg-primary/10 text-primary rounded-full text-xs font-medium cursor-pointer transition-colors duration-300 hover:bg-primary/20"
                    >
                        {f.label} <i className="fas fa-times text-[0.65rem]"></i>
                    </span>
                ))}
            </div>

            {/* Job cards grid */}
            <div id="search-results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {jobs.map((job, index) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        index={index}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onApply={onApply}
                    />
                ))}
            </div>

            {/* Empty state */}
            {jobs.length === 0 && (
                <div id="empty-state" className="flex flex-col items-center justify-center py-16 px-5 text-gray-400 text-center gap-3">
                    <i className="fas fa-briefcase text-5xl opacity-35"></i>
                    <h3 className="text-xl text-gray-500">No jobs found</h3>
                    <p className="text-sm text-gray-400">Try adjusting your filters or search keyword.</p>
                </div>
            )}
        </section>
    );
}
