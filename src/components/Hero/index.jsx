import React from 'react'
import image2 from "../../assets/Adsız_tasarım__1_-removebg-preview.png"
import image3 from "../../assets/Adsız_tasarım__3_-removebg-preview.png"
import "../../App.css"
const Hero = () => {
    return (
        <main class="bg_image relative overflow-hidden h-screen py-20">
            <div class="flex relative z-20 items-center overflow-hidden">
                <div class="container mx-auto px-6 flex relative py-16">
                    <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 class="font-bebas-neue uppercase mb-1 text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Mekana
                            <span class="text-4xl sm:text-6xl">
                                Değer Katan <span class="text-4xl sm:text-6xl text-white">Tasarımlar</span>
                            </span>
                        </h1>
                        <p class="text-sm sm:text-base text-white">
                            Amacımız, yaşam alanlarınızı ve iş mekanlarınızı fonksiyonel, estetik ve sürdürülebilir bir şekilde şekillendirerek hayatınıza değer katmaktır.
                        </p>
                        <div class="flex mt-8">
                            {/* <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a> */}
                        </div>
                    </div>
                    <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        {/* <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto" /> */}
                    </div>
                </div>
            </div>
        </main>
        // <section className=''>
        //     <div className="bg-black text-white py-20">
        //         <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        //             <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
        //                 <h1 className="text-3xl md:text-5xl  text-yellow-300 tracking-loose">UK</h1>
        //                 <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Mimarlık : Başarı, Tecrübe, Özgün
        //                 </h2>
        //                 <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
        //                     register now to showcase your talent and win exciting prizes.</p>
        //                 <a href="#"
        //                     className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        //                     Explore Now</a>
        //             </div>
        //             <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
        //                 <div className="h-48 flex flex-wrap content-center">
        //                     <div className="w-[200px] h-[200px] mt-7 inline-block hidden xl:block">
        //                         {/* <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /> */}
        //                         <img className='clip_path w-full h-full object-cover' src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        //                     </div>
        //                     <div className="w-[300px] h-[300px] inline-block mt-28 xl:block">
        //                         {/* <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /> */}
        //                         {/* <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src={image3} /> */}
        //                         <img className='clip_path w-full h-full object-cover' src="https://images.unsplash.com/photo-1649174988469-32e0bccaa668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        //                     </div>
        //                     <div className="w-[200px] h-[200px] inline-block mt-72 hidden xl:block">
        //                         {/* <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /> */}
        //                         {/* <img className="inline-block mt-28 hidden lg:block" src={image2} /> */}
        //                         <img className='clip_path w-full h-full object-cover' src="https://images.unsplash.com/photo-1574848296471-28f79a036f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Hero;