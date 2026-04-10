export default function SearchBar({ filters, onFilterChange, onSearch, onClear }) {
    return (
        <section className="relative -mt-12 z-10 px-[5%]">
            <div className="search-container flex flex-col py-6 px-8 gap-4 max-w-[1000px] mx-auto bg-white/95 backdrop-blur-[10px] border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                <div className="search-row flex gap-3 items-center max-md:flex-col">
                    <div className="flex-1 relative w-full">
                        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                        <input
                            type="text"
                            id="keyword-search"
                            placeholder="Search by title, company, or keyword…"
                            value={filters.keyword}
                            onChange={(e) => onFilterChange('keyword', e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }}
                            className="w-full py-3 pr-5 pl-10 border-2 border-gray-200 rounded-full text-base outline-none transition-all duration-300 bg-white focus:border-primary focus:shadow-[0_0_0_3px_rgba(108,99,255,0.12)]"
                        />
                    </div>
                    <button
                        id="search-btn"
                        onClick={onSearch}
                        className="py-3 px-7 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-[0_4px_18px_rgba(108,99,255,0.35)]"
                    >
                        <i className="fas fa-search"></i> Search
                    </button>
                    <button
                        id="clear-btn"
                        onClick={onClear}
                        className="py-3 px-6 bg-transparent text-primary border-2 border-primary rounded-full text-base font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-primary hover:text-white"
                    >
                        <i className="fas fa-times"></i> Clear
                    </button>
                </div>
                <div className="filter-row flex flex-wrap gap-3 max-md:flex-col">
                    <select
                        id="job-role"
                        value={filters.role}
                        onChange={(e) => onFilterChange('role', e.target.value)}
                        className="py-2.5 px-4 border border-gray-300 rounded-full text-sm outline-none flex-1 min-w-[160px] cursor-pointer bg-white transition-colors duration-300 focus:border-primary"
                    >
                        <option value="">All Roles</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="uiux">UI/UX Designer</option>
                        <option value="data">Data Analyst</option>
                        <option value="devops">DevOps Engineer</option>
                        <option value="intern">Intern</option>
                    </select>
                    <select
                        id="job-location"
                        value={filters.location}
                        onChange={(e) => onFilterChange('location', e.target.value)}
                        className="py-2.5 px-4 border border-gray-300 rounded-full text-sm outline-none flex-1 min-w-[160px] cursor-pointer bg-white transition-colors duration-300 focus:border-primary"
                    >
                        <option value="">All Locations</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="delhi">Delhi NCR</option>
                        <option value="remote">Remote</option>
                    </select>
                    <select
                        id="job-type"
                        value={filters.type}
                        onChange={(e) => onFilterChange('type', e.target.value)}
                        className="py-2.5 px-4 border border-gray-300 rounded-full text-sm outline-none flex-1 min-w-[160px] cursor-pointer bg-white transition-colors duration-300 focus:border-primary"
                    >
                        <option value="">All Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="internship">Internship</option>
                        <option value="contract">Contract</option>
                    </select>
                    <select
                        id="salary-range"
                        value={filters.salary}
                        onChange={(e) => onFilterChange('salary', e.target.value)}
                        className="py-2.5 px-4 border border-gray-300 rounded-full text-sm outline-none flex-1 min-w-[160px] cursor-pointer bg-white transition-colors duration-300 focus:border-primary"
                    >
                        <option value="">Any Salary</option>
                        <option value="0-3">0 – 3 LPA</option>
                        <option value="3-6">3 – 6 LPA</option>
                        <option value="6-10">6 – 10 LPA</option>
                        <option value="10+">10+ LPA</option>
                    </select>
                </div>
            </div>
        </section>
    );
}
