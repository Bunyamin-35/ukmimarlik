import { NavLink,Link } from "react-router-dom";
import logo from "../../assets/LOGO A3.jpg"

const Navbar = () => {
    return (
        <header className="absolute top-0 left-0 bg-transparent h-24 sm:h-32 flex items-center z-30 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/">
                    <img className="h-28 w-auto border " src={logo} alt="Your Company" />
                </Link>
                <div className="flex items-center">
                    <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <NavLink to="/" className="text-white py-2 px-6 flex">
                            Ana Sayfa
                        </NavLink>
                        <NavLink to="/hakkimizda" className="text-white py-2 px-6 flex">
                            Hakkımızda
                        </NavLink>
                        <NavLink to="/hizmetlerimiz" className="text-white py-2 px-6 flex">
                            Hizmetlerimiz
                        </NavLink>
                        <NavLink to="/iletisim" className="text-white py-2 px-6 flex">
                            İletişim
                        </NavLink>
                    </nav>
                    <button className="lg:hidden flex flex-col ml-4">
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
