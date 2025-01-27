import React from "react";
import "./WeDo.css";
const WeDo = () => {
  return (
    <div>
      <div class="wedo hero min-h-screen       ">
        <div class=" ">
          {/* <!-- What I DO --> */}
          <section class=" w-full h-full flex flex-col justify-center   py-10 md:px-20 px-2">
            {/* <!-- Heading --> */}
            <div class="w-fit">
              <h2 class="text-2xl font-bold text-white dark:text-black pb-2">
                What WE Do
              </h2>
              <div class="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
                <hr class="border-[3px] border-green-400 dark:border-green-600 w-[20%]" />
              </div>
            </div>

            <div class="  grid md:grid-cols-3 grid-cols-1 gap-4 mt-8">
              {/* <!-- 1 --> */}
              <div class=" card">
                <span class="">
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="code-slash-outline"
                  ></ion-icon>
                </span>

                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Research & Development
                  </h3>
                  <p class="text-white text-justify">
                    Pioneering advancements in AI and robotics to solve
                    real-world problems and unlock new possibilities. Our R&D
                    initiatives are at the forefront of technological
                    innovation, addressing challenges in healthcare,
                    sustainability, transportation, and beyond.
                  </p>
                </div>
              </div>

              {/* <!-- 2 --> */}
              <div class="  sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="browsers-outline"
                  ></ion-icon>
                </span>

                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Global Events & Conferences
                  </h3>
                  <p class="text-white dark:text-gray-700">
                    Connecting visionaries through inspiring talks, workshops,
                    and exhibitions. Our events foster collaboration, spark
                    creativity, and showcase the latest breakthroughs in AI and
                    robotics.
                  </p>
                </div>
              </div>

              {/* <!-- 3 --> */}
              <div class="  sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="archive-outline"
                  ></ion-icon>
                </span>

                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Custom CMS Solutions
                  </h3>
                  <p class="text-gray-400 dark:text-gray-700">
                    Building reusable and efficient CMS APIs to simplify website
                    management and scalability.
                  </p>
                </div>
              </div>
              {/* <!-- 4 --> */}
              <div class="  sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="phone-portrait-outline"
                  ></ion-icon>
                </span>
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Mobile App Dev't
                  </h3>
                  <p class="text-gray-400 dark:text-gray-700">
                    Designing and developing user-friendly mobile applications
                    for iOS and Android, ensuring seamless performance and user
                    satisfaction.
                  </p>
                </div>
              </div>
              {/* <!-- 5 --> */}
              <div class="  sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="bag-check-outline"
                  ></ion-icon>
                </span>
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    E-commerce Development
                  </h3>
                  <p class="text-gray-400 dark:text-gray-700">
                    Creating robust platforms to elevate your online business
                    presence.
                  </p>
                </div>
              </div>
              {/* <!-- 6 --> */}
              <div class="  sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    class="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                    name="swap-horizontal-outline"
                  ></ion-icon>
                </span>
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    API Integration
                  </h3>
                  <p class="text-gray-400 dark:text-gray-700">
                    Seamlessly connecting systems to enhance functionality and
                    performance.
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
