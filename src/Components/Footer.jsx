const Footer = () => {
    return (
        <footer className="bg-[#161C28] px-6 md:px-20 py-12 text-white mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left: Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2 ">
                        {/* Replace with your logo image if needed */}
                        <img
                            src="/car_logo.png"
                            alt="CarvanaX"
                            className="w-25 brightness-0 invert"
                        />
                        <h2 className="text-xl font-semibold tracking-wide">
                            CarvanaX
                        </h2>
                    </div>
                </div>

                {/* Center: Navigation */}
                <div className="flex items-center justify-center gap-8 text-lg">
                    <a href="#" className="hover:text-blue-400 transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-400 transition">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-400 transition">
                        Services
                    </a>
                    <a href="#" className="hover:text-blue-400 transition">
                        Contact
                    </a>
                </div>

                {/* Right: Contact Info */}
                <div className="text-sm text-gray-300 space-y-1 text-center md:text-right">
                    <p className="font-medium text-white">
                        (456) 789-12301
                    </p>
                    <p>info@carvanax.co.bd</p>
                    <p>Pollibidyut,Savar</p>
                    <p>Dhaka, Bangladesh</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
