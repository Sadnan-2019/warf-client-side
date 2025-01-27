import React from 'react';
import "./WeDo.css"
const WeDo = () => {
    return (
        <div>
          <div
  class="wedo       ">

  <div
    class="xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-10   dark:bg-white rounded-xl overflow-hidden">
    {/* <!-- What I DO --> */}
    <section class=" w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">
      {/* <!-- Heading --> */}
      <div class="w-fit">
        <h2 class="text-2xl font-bold text-white dark:text-black pb-2">What WE Do</h2>
        <div class="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
          <hr class="border-[3px] border-green-400 dark:border-green-600 w-[20%]" />
        </div>
      </div>

      <div class="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {/* <!-- 1 --> */}
        <div class="flex sm:gap-4 gap-1">
          <span class="">
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="code-slash-outline"></ion-icon>
              </span>

          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">Web Development</h3>
            <p class="text-gray-400 dark:text-gray-700">
              Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge
              technologies.
            </p>
          </div>
        </div>

        {/* <!-- 2 --> */}
        <div class="flex sm:gap-4 gap-2">
          <span>
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="browsers-outline"></ion-icon>
            </span>

          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">UI/UX Design</h3>
            <p class="text-gray-400 dark:text-gray-700">Creating visually appealing and user-centric designs that enhance user
              experiences and engagement.</p>
          </div>
        </div>

        {/* <!-- 3 --> */}
        <div class="flex sm:gap-4 gap-2">
          <span>
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="archive-outline"></ion-icon>
            </span>

          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">Custom CMS Solutions</h3>
            <p class="text-gray-400 dark:text-gray-700">Building reusable and efficient CMS APIs to simplify website management and
              scalability.</p>
          </div>
        </div>
        {/* <!-- 4 --> */}
        <div class="flex sm:gap-4 gap-2">
          <span>
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="phone-portrait-outline"></ion-icon>
            </span>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">Mobile App Dev't</h3>
            <p class="text-gray-400 dark:text-gray-700">Designing and developing user-friendly mobile applications for iOS and Android,
              ensuring seamless performance and user satisfaction.</p>
          </div>
        </div>
        {/* <!-- 5 --> */}
        <div class="flex sm:gap-4 gap-2">
          <span>
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="bag-check-outline"></ion-icon>
            </span>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">E-commerce Development</h3>
            <p class="text-gray-400 dark:text-gray-700">Creating robust platforms to elevate your online business presence.</p>
          </div>
        </div>
        {/* <!-- 6 --> */}
        <div class="flex sm:gap-4 gap-2">
          <span>
              <ion-icon class="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="swap-horizontal-outline"></ion-icon>
            </span>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold text-white dark:text-black">API Integration</h3>
            <p class="text-gray-400 dark:text-gray-700">Seamlessly connecting systems to enhance functionality and performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>

</div>
{/* <!--  --> */}
   
        </div>
    );
};

export default WeDo;