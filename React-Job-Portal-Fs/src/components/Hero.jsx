export default function Hero() {
    return (
        <header id="home" className="hero h-screen flex items-center justify-center text-center text-white">
            <div className="hero-content max-w-[800px] p-5 animate-fadeInUp">
                <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                    Find Your <span className="text-secondary">Dream Job</span>
                </h1>
                <p className="text-lg mb-8 opacity-90">Connecting talent with opportunity across the globe.</p>
                <a href="#jobs" className="inline-block py-3 px-8 bg-secondary text-white text-lg font-semibold no-underline rounded-full transition-all duration-300 shadow-[0_5px_15px_rgba(255,101,132,0.4)] hover:-translate-y-1 hover:bg-secondary-dark">
                    Browse Jobs
                </a>
            </div>
        </header>
    );
}
