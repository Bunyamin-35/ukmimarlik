import logo from "../../assets/LOGO A3.jpg"
const Navbar = () => {
    return (
        <header class="absolute top-0 left-0 bg-transparent h-24 sm:h-32 flex items-center z-30 w-full">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <div class="">
                    <img className="h-28 w-auto border " src={logo} alt="Your Company" />
                </div>
                <div class="flex items-center">
                    <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <a href="#" class="text-white py-2 px-6 flex">
                            Ana Sayfa
                        </a>
                        <a href="#" class="text-white py-2 px-6 flex">
                            Hakkımızda
                        </a>
                        <a href="#" class="text-white py-2 px-6 flex">
                            Hizmetlerimiz
                        </a>
                        <a href="#" class="text-white py-2 px-6 flex">
                            İletişim
                        </a>
                        {/* <a href="#" class="py-2 px-6 flex">
                            Carrer
                        </a> */}
                    </nav>
                    <button class="lg:hidden flex flex-col ml-4">
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>
            </div>
        </header>
        // <nav className="bg-white mt-10 absolute top-0 left-0 w-full">
        //     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        //         <div className="relative flex h-16 items-center justify-between">
        //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        //                 <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        //                     <span className="absolute -inset-0.5"></span>
        //                     <span className="sr-only">Open main menu</span>
        //                     <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                     </svg>
        //                     <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div className="flex flex-shrink-0 items-center">
        //                     <img className="h-auto w-[100px] border " src={logo} alt="Your Company" />
        //                 </div>

        //             </div>
        //             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        //                 <div className="hidden sm:ml-6 sm:block">
        //                     <div className="flex space-x-4">
        //                         <a href="#" className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Anasayfa</a>
        //                         <a href="#" className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Hakkımızda</a>
        //                         <a href="#" className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Hizmetlerimiz</a>
        //                         <a href="#" className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">İletişim</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="sm:hidden" id="mobile-menu">
        //         <div className="space-y-1 px-2 pb-3 pt-2">
        //             <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        //             <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        //             <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        //             <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        //         </div>
        //     </div>
        // </nav>


    )
}

export default Navbar;
