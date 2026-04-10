import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar flex justify-between items-center py-5 px-[5%] fixed w-full top-0 z-[1000] bg-white/85 backdrop-blur-[10px] shadow-md transition-all duration-300">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent cursor-pointer no-underline">
                HireHub
            </Link>
            <ul className={`list-none flex max-md:hidden`}>
                <li className="ml-8">
                    <Link to="/" className="no-underline text-gray-800 font-medium text-base transition-colors duration-300 hover:text-primary">
                        Home
                    </Link>
                </li>
                <li className="ml-8">
                    {isLoginPage ? (
                        <Link to="/#jobs" className="no-underline text-gray-800 font-medium text-base transition-colors duration-300 hover:text-primary">
                            Jobs
                        </Link>
                    ) : (
                        <a href="#jobs" className="no-underline text-gray-800 font-medium text-base transition-colors duration-300 hover:text-primary">
                            Jobs
                        </a>
                    )}
                </li>
                <li className="ml-8">
                    {isLoginPage ? (
                        <Link to="/#post-job" className="no-underline font-medium text-base py-2 px-5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(108,99,255,0.4)]">
                            Post a Job
                        </Link>
                    ) : (
                        <a href="#post-job" className="no-underline font-medium text-base py-2 px-5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(108,99,255,0.4)]">
                            Post a Job
                        </a>
                    )}
                </li>
                <li className="ml-8">
                    {isLoginPage ? (
                        <span className="no-underline text-primary font-semibold text-base">Login</span>
                    ) : (
                        <Link to="/login" className="no-underline text-gray-800 font-medium text-base transition-colors duration-300 hover:text-primary">
                            Login
                        </Link>
                    )}
                </li>
            </ul>
            <div className="burger hidden max-md:block cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
                <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
                <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
            </div>
        </nav>
    );
}
