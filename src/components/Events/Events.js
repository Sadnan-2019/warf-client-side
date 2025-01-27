import React from "react";

const Events = () => {
  return (
    <div>
      <div class="w-full min-h-screen flex flex-col items-center justify-center ">
        {/* <span class="text-md md:text-lg font-bold text-[#117278] flex items-center gap-1"><ion-icon name="heart-outline"></ion-icon>Our Insights</span> */}
        <h2 class="text-4xl sm:text-5xl md:text-4xl text-center chelsea-market-regular font-bold text-[#6b2c86] md:mb-16 py-5 mb-10">
          Our Events{" "}
        </h2>

        <div class="px-4 md:px-[2rem] xl:px-[6rem] flex flex-col lg:flex-row gap-10">
          <div class="lg:w-[80%] xl:w-[60%]">
          <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbsprc%2Fposts%2Fpfbid0QgbjWFRBBGQueVRbLKwspBJmZNAYwXh8qdq2XcyCffHVU9hUeXj6uH63p1xhemrSl&show_text=true&width=500"
                  width="500"
                  height="500"
                  className="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>

            {/* <div class="flex flex-col px-6 py-8 border-l border-r border-b">
              <h3 class="text-2xl md:text-3xl font-semibold text-teal-900 chelsea-market-regular">
                A Beginner's Guide to Modern Web Design
              </h3>

              <p class="text-md text-gray-500">
                Step into the world of Tailwind CSS with this beginner-friendly
                guide. Learn the basics of Tailwind's utility classes,
                responsive design features, and customization options to
                kickstart your journey in modern web design.
              </p>
            </div> */}
          </div>

          <div class="w-full flex flex-col items-stretch justify-center">
            <div class="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
              <div class="px-6 py-2 bg-yellow-500 text-white flex flex-col items-center justify-center">
                <span class="text-7xl font-semibold">13 </span>
                <span class="font-semibold">January</span>
              </div>

              <div class="flex flex-col justify-between">
                

                <h3 class="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">Effortless Styling: Unleashing the Power of
            Tailwind CSS</h3>
      
          <p class="text-md text-gray-500">Discover how Tailwind CSS revolutionizes web development with its
            utility-first approach.</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
              <div class="px-6 py-2 bg-teal-500 text-white flex flex-col items-center justify-center">
                <span class="text-7xl font-semibold">13</span>
                <span class="font-semibold">January</span>
              </div>

              <div class="flex flex-col justify-between">
                {/* <!-- Author & Category --> */}
                {/* <div class="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
            <span class="flex gap-1 items-center"><ion-icon name="person-outline"></ion-icon>By Sammytg7</span>
            <span class="flex gap-1 items-center"><ion-icon class="-rotate-90" name="pricetags-outline"></ion-icon>TechNews</span>
          </div> */}
                {/* <!-- Blog Titile --> */}
                <h3 class="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                  Tailwind CSS Pro Tips: Advanced Techniques for Stunning Web
                  Interfaces
                </h3>
                {/* <!-- Blog Description --> */}
                <p class="text-md text-gray-500">
                  Elevate your web design skills with advanced tips and tricks
                  for Tailwind CSS. Uncover techniques for optimizing your
                  workflow
                </p>
              </div>
            </div>

            {/* <!-- 3 --> */}
            <div class="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
              {/* <!-- Blog Date --> */}
              <div class="px-6 py-2 bg-red-500 text-white flex flex-col items-center justify-center">
                <span class="text-7xl font-semibold">13</span>
                <span class="font-semibold">January</span>
              </div>
              {/* <!--  --> */}
              <div class="flex flex-col justify-between">
                {/* <!-- Author & Category --> */}

                {/* <!-- Blog Titile -->/ */}
                <h3 class="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                  Responsive Design Made Easy: Harnessing Tailwind CSS for
                  Mobile-First Websites
                </h3>
                {/* <!-- Blog Description -->/ */}
                <p class="text-md text-gray-500">
                  Explore how Tailwind CSS simplifies responsive design for
                  mobile-first websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Events;
