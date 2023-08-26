import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <div className="mx-auto">
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%]  bg-no-repeat bg-[url('https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80')]"></div>
          <div className="container px-6 md:px-12">
            <div
              className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div class="order-1 sm:ml-6 xl:ml-0">
                    <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                      <span class="mb-1 block text-sm leading-6 text-indigo-500">Restorasyon</span>Geçmişi Geleceğe Taşıyoruz</h3>
                    <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                      <p>Tarihi ve kültürel değerlere saygıyla yaklaşıyor, geçmişi günümüze taşıyan restorasyon projeleri sunuyoruz. Mekanların karakterini korurken modern yaşamın gereksinimlerini de entegre ediyoruz. Her dokunuşumuz, geçmişin izlerini bugünün estetiğiyle harmanlayarak özgün ve etkileyici sonuçlar doğuruyor.</p>
                    </div>
                    {/* <a
                      class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                      href="https://headlessui.dev">Learn
                      more<span class="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                        class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                      </svg></a> */}
                  </div><img src="https://www.kulturportali.gov.tr/repoKulturPortali/large/14022013/daa41429-6311-4603-a881-b20fbd7db071.jpg?format=jpg&quality=50" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
                <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div class="order-1 sm:ml-6 xl:ml-0">
                    <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                      <span class="mb-1 block text-sm leading-6 text-purple-500">İç Mekan</span>Yaşam Alanlarınızı Yeniden Tanımlayın</h3>
                    <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                      <p>İç mekanlar, hikayelerin başladığı yerlerdir. Her bir mekanı, yaşam tarzınız ve ihtiyaçlarınız doğrultusunda özelleştiriyoruz. Fonksiyonelliği ve estetiği bir araya getirerek sadece yaşam alanları değil, aynı zamanda ruhunuza hitap eden mekanlar üretiyoruz. Her detay, size özel bir deneyim sunmak için tasarlanır.</p>
                    </div>
                    {/* <a
                      class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                      href="https://heroicons.com">Learn
                      more<span class="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span><svg
                        class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                      </svg></a> */}
                  </div><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
                <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div class="order-1 sm:ml-6 xl:ml-0">
                    <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                      <span class="mb-1 block text-sm leading-6 text-cyan-500">Dış Mekan</span>Doğayla Buluşun</h3>
                    <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                      <p>Dış mekanlar, doğayla iç içe geçen yaşam alanlarıdır. Estetik ve işlevselliği harmanlayarak açık hava mekanlarınızı yeniden hayal ediyoruz. Her mevsimde kullanabileceğiniz dinamik ve estetik açıdan etkileyici dış mekanlar tasarlıyoruz. Doğanın sunduğu güzellikleri tasarım anlayışımızla birleştiriyoruz.</p>
                    </div>
                    {/* <a
                      class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                      href="https://heropatterns.com">Learn
                      more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                        class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                      </svg></a> */}
                  </div><img src="https://images.unsplash.com/photo-1682502524896-6d78b9e8413a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
                <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div class="order-1 sm:ml-6 xl:ml-0">
                    <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                      <span class="mb-1 block text-sm leading-6 text-cyan-500">Proje/Tasarım</span>Hayallerinizi Tasarıma Dönüştürün</h3>
                    <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                      <p>Her proje, bir hayalin somut hale gelme yolculuğudur. Vizyonlarınızı dinliyor, ihtiyaçlarınızı anlıyor ve özgün tasarımlarla buluşturuyoruz. Detaylı planlama ve yaratıcı yaklaşımımızla her projenin en iyi şekilde hayata geçmesini sağlıyoruz. Siz hayal edin, gerisini bize bırakın.</p>
                    </div>
                    {/* <a
                      class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                      href="https://heropatterns.com">Learn
                      more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                        class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                      </svg></a> */}
                  </div><img src="https://images.unsplash.com/photo-1619759247142-b457e9e6b634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Navbar />
      <Footer />
    </>
  )
}

export default Services;