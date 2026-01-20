import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./Authcontext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAdmin, logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeMenu();
    };

    return (
        <nav className="bg-[#161C28]/50 backdrop-blur-lg text-white fixed w-full z-20 top-0 start-0 border-b border-white/10 shadow-lg">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 md:px-20 py-4">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="flex items-center space-x-3 rtl:space-x-reverse transition-transform hover:scale-105 duration-300"
                    onClick={closeMenu}
                >
                    <img 
                        src="/car_logo.png" 
                        className="w-15 h-15 brightness-0 invert" 
                        alt="CarvanaX Logo" 
                    />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                        CarvanaX
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span className="sr-only">Open main menu</span>
                    {/* Hamburger Icon with Animation */}
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span 
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span 
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span 
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </div>
                </button>

                {/* Navigation Menu */}
                <div 
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto transition-all duration-300 ease-in-out`} 
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white/10 rounded-lg bg-neutral-primary/90 backdrop-blur-md md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link 
                                to="/" 
                                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                aria-current="page"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        
                        {/* Show Add Cars only if admin is logged in */}
                        {isAdmin && (
                            <li>
                                <Link 
                                    to="/addcar" 
                                    className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                    onClick={closeMenu}
                                >
                                    Add Cars
                                </Link>
                            </li>
                        )}
                        
                        <li>
                            <Link 
                                to="/allcars" 
                                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                onClick={closeMenu}
                            >
                                All Cars
                            </Link>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                onClick={closeMenu}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#services" 
                                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                onClick={closeMenu}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#161C28] hover:shadow-lg hover:scale-105 active:scale-95"
                                onClick={closeMenu}
                            >
                                Contact
                            </a>
                        </li>
                        
                        {/* Admin Login/Logout Button */}
                        {!isAdmin ? (
                            <li>
                                <Link 
                                    to="/admin-login" 
                                    className="block py-2 px-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 hover:shadow-lg hover:scale-105 active:scale-95"
                                    onClick={closeMenu}
                                >
                                    Admin Login
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <button 
                                    onClick={handleLogout}
                                    className="block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95"
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;