import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            setIsLoading(true);

            setTimeout(() => {
                alert(`Welcome back, ${email}! Redirecting to dashboard...`);
                navigate('/');
            }, 1000);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="font-poppins bg-light-bg text-gray-800 overflow-x-hidden scroll-smooth">
            <Navbar />

            <div className="login-container h-screen flex justify-center items-center">
                <div className="w-full max-w-[400px] p-10 text-center bg-white/95 backdrop-blur-[10px] border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                    <h2 className="text-2xl font-bold mb-1 text-gray-800">Welcome Back</h2>
                    <p className="mb-8 text-gray-500 text-sm">Login to your account to continue</p>

                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="input-group relative mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 focus:border-primary peer"
                            />
                            <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                                Email Address
                            </label>
                        </div>

                        <div className="input-group relative mb-6">
                            <input
                                type="password"
                                id="password"
                                placeholder=" "
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg outline-none text-base bg-transparent transition-colors duration-300 focus:border-primary peer"
                            />
                            <label htmlFor="password" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 bg-white px-1 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-semibold">
                                Password
                            </label>
                        </div>

                        <div className="flex justify-between items-center text-xs mb-5 text-gray-600">
                            <label className="flex items-center gap-1.5 cursor-pointer">Remember me
                                <input type="checkbox" className="accent-primary" />
                            </label>
                            <a href="#" className="text-primary no-underline font-medium hover:underline">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            id="submit-btn"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-[0_5px_15px_rgba(108,99,255,0.4)] hover:-translate-y-0.5"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>

                        <div className="mt-5 text-sm">
                            <p>Don't have an account? <a href="#" className="text-primary no-underline font-semibold hover:underline">Register here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
