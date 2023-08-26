import React from 'react'
import logo from "../../assets/LOGO A3.jpg"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-white m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-28 mr-3" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ubeyde Karadeniz Mimarlık</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Ana Sayfa</Link>
                        </li>
                        <li>
                            <Link to="/hakkimizda" className="mr-4 hover:underline md:mr-6">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link to="/hizmetlerimiz" className="mr-4 hover:underline md:mr-6 ">Hizmetlerimiz</Link>
                        </li>
                        <li>
                            <Link to="/iletisim" className="hover:underline">İletişim</Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/bulutbunyamin/" className="hover:underline">Bünyamin BULUT</a>. Tüm Hakları Saklıdır.</span>
                    <div className="flex justify-center space-x-5">
                        <a href="https://instagram.com/ubeydekaradenizmimarlik" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                        </a>
                        <a href="https://instagram.com/ubeydekaradenizmimarlik" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                        </a>
                        <a href="https://instagram.com/ubeydekaradenizmimarlik" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                        </a>
                        <a href="https://instagram.com/ubeydekaradenizmimarlik" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                        </a>
                    </div>

                </div>

            </div>
        </footer>


    )
}

export default Footer;