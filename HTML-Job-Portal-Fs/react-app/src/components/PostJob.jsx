export default function PostJob({ formData, onFormChange, onSubmit }) {
    return (
        <section id="post-job" className="py-20 px-[5%] bg-gray-50">
            <div className="max-w-[600px] mx-auto p-10 text-center bg-white/95 backdrop-blur-[10px] border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                <h2 className="mb-8 text-primary text-2xl font-bold">
                    <i className="fas fa-briefcase"></i> Post a New Job
                </h2>
                <form id="job-form" onSubmit={onSubmit}>
                    <div className="input-group relative mb-6">
                        <input
                            type="text"
                            id="title"
                            placeholder=" "
                            required
                            value={formData.title}
                            onChange={(e) => onFormChange('title', e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 focus:border-primary peer"
                        />
                        <label htmlFor="title" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                            Job Title
                        </label>
                    </div>
                    <div className="input-group relative mb-6">
                        <input
                            type="text"
                            id="company"
                            placeholder=" "
                            required
                            value={formData.company}
                            onChange={(e) => onFormChange('company', e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 focus:border-primary peer"
                        />
                        <label htmlFor="company" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                            Company Name
                        </label>
                    </div>
                    <div className="input-group relative mb-6">
                        <input
                            type="text"
                            id="location"
                            placeholder=" "
                            required
                            value={formData.location}
                            onChange={(e) => onFormChange('location', e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 focus:border-primary peer"
                        />
                        <label htmlFor="location" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                            Location
                        </label>
                    </div>
                    <div className="input-group relative mb-6">
                        <textarea
                            id="description"
                            placeholder=" "
                            rows="4"
                            required
                            value={formData.description}
                            onChange={(e) => onFormChange('description', e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 resize-y focus:border-primary peer"
                        ></textarea>
                        <label htmlFor="description" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                            Job Description
                        </label>
                    </div>
                    <div className="flex gap-4 max-md:flex-col">
                        <div className="flex-1">
                            <select
                                id="post-job-type"
                                required
                                value={formData.type}
                                onChange={(e) => onFormChange('type', e.target.value)}
                                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 cursor-pointer text-gray-600 focus:border-primary"
                            >
                                <option value="" disabled>Job Type</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="internship">Internship</option>
                                <option value="contract">Contract</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <select
                                id="post-salary-range"
                                required
                                value={formData.salary}
                                onChange={(e) => onFormChange('salary', e.target.value)}
                                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 cursor-pointer text-gray-600 focus:border-primary"
                            >
                                <option value="" disabled>Salary Range</option>
                                <option value="0-3">0 – 3 LPA</option>
                                <option value="3-6">3 – 6 LPA</option>
                                <option value="6-10">6 – 10 LPA</option>
                                <option value="10+">10+ LPA</option>
                            </select>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Post Job"
                        className="w-full py-3 mt-6 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-[0_5px_15px_rgba(108,99,255,0.4)] hover:-translate-y-0.5"
                    />
                </form>
            </div>
        </section>
    );
}
