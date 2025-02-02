import React from "react";
import event1 from "../../assets/landingone.jpg"
import event2 from "../../assets/landingthree.jpg"
import event3 from "../../assets/landingfour.jpg"

const Events = () => {
  return (
    <div>
      
      <div class="w-full min-h-screen flex flex-col items-center justify-center ">
        {/* <span class="text-md md:text-lg font-bold text-[#117278] flex items-center gap-1"><ion-icon name="heart-outline"></ion-icon>Our Insights</span> */}
         
        

        <section class="bg-white dark:bg-gray-900">
  {/* <!-- Title Section --> */}
  

  {/* <!-- Content Section --> */}
  <div class="px-8  mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16  sm:py-16">
  <div class="w-fit">
              <h2 class="text-4xl font-bold text-[#48135e] dark:text-black pb-2">
                Our Events
              </h2>
               
            </div>
    <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src={event1}/>
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">September 10th 2023</p>
          <a href="#" class="block mb-3 hover:underline">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
              Journey to the Mountains
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Escape the hustle and explore the serene beauty of the mountains. Discover the peace and adventure that awaits.</p>
          <a href="#_" class="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
        </div>
      </div>

      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src={event3}/>
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">September 15th 2023</p>
          <a href="#" class="block mb-3 hover:underline">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
              Explore the Deep Oceans
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Dive into the deep oceans and explore the beauty and mystery of the underwater world. A truly unforgettable experience.</p>
          <a href="#_" class="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
        </div>
      </div>

      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src={event2}/>
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">October 5th 2023</p>
          <a href="#" class="block mb-3 hover:underline">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
              Desert Safari
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.</p>
          <a href="#_" class="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>

       
    </div>
  );
};

export default Events;
