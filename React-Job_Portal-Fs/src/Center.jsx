function Center() {
    return (
        <>
            <section id="education">
                <h2>Education</h2>
                <div className="edu-item">
                    <h3>B.Tech in Computer Science</h3>
                    <p>XYZ University</p>
                    <p>2022 - 2026</p>
                </div>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>AI Resume Generator</h3>
                    <p>Web application that generates professional resumes using AI APIs.</p>
                </div>
                <div className="project">
                    <h3>Custom SMTP Email Server</h3>
                    <p>Configured Postfix + Dovecot email server with DNS authentication.</p>
                </div>
            </section>
            <section id="experience">
                <h2>Experience</h2>

                <div className="exp-item">
                    <h3>Software Development Intern</h3>
                    <p>Company Name</p>
                    <p>June 2025 - Aug 2025</p>

                    <ul>
                        <li>Developed backend APIs</li>
                        <li>Optimized database queries</li>
                    </ul>
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea rows="4" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </>
    )
}

export default Center;