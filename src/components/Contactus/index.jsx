import React from 'react'

const Contactus = () => {
    return (
        <section class="bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    {/* <p class="font-medium text-blue-500 dark:text-blue-400">İletişim</p> */}

                    <h1 class="mt-2 text-2xl font-semibold text-blue-500 md:text-3xl dark:text-white">İletişim</h1>

                    <p class="mt-3 text-gray-500 dark:text-gray-400">Uzman kadromuzla, sizinle tanışmak için sabırsızlanıyoruz.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">


                    <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12188.145368446989!2d29.00027524760788!3d40.208254530977555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15d0843754b9%3A0xbc2ecfb82acab6cc!2sDikkald%C4%B1r%C4%B1m%2C%2016090%20Osmangazi%2FBursa!5e0!3m2!1str!2str!4v1693043755145!5m2!1str!2str" width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" ></iframe>


                        {/* <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe> */}
                    </div>
                    <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-500 dark:text-white">E-mail</h2>
                            {/* <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p> */}
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">info@ubeydekaradenizmimarlik.com</p>
                        </div>

                        <div>
                            <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-500 dark:text-white">Ofis</h2>
                            {/* <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p> */}
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Dikkaldırım, Osmangazi/BURSA</p>
                        </div>

                        <div>
                            <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-500 dark:text-white">Telefon</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Pazartesi-Cumartesi 08:00/20:00</p>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+90 (535) 358 02 61</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactus