export default function Footer() {
    return (
        <footer className="bg-dark-bg text-white py-10 px-[5%] text-center">
            <div className="flex flex-col items-center gap-5">
                <p>&copy; 2026 HireHub. All rights reserved.</p>
                <div className="flex gap-5">
                    <a href="#" className="text-white text-xl transition-colors duration-300 hover:text-secondary">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white text-xl transition-colors duration-300 hover:text-secondary">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white text-xl transition-colors duration-300 hover:text-secondary">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
