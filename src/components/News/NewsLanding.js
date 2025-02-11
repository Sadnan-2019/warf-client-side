import React from "react";
import news from "../../assets/news.jpg"
const NewsLanding = () => {
  return (
    <div>
      <div className="full-width-slider">
        <div className="news-landing">
          <div class="pt-16 pb-8 mx-auto max-w-5xl px-4 sm:pt-24 justify-center items-center   ">
            <div class="text-center ">
              <h1 class="text-4xl text-white  tracking-tight font-extrabold sm:text-5xl pb-3 md:pb-0 md:text-4xl">
                The core objective of our research is to create a world enriched
                with data and AI, ensuring benefits for everyone.
              </h1>
              {/* <p class="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            <code class="text-white font-semibold">BlockchainDevs</code>
            <span className="text-white ">helps independent developers get their next Web3 gig.</span>
          </p> */}
              <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div class="rounded-md shadow">
                  <a
                    class="w-full text-white flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md  bg-blue-900 hover:bg-green-500  md:text-xl md:px-10"
                    href="#"
                  >
                    Join Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div class="text-center mb-10">
          <h2 class="text-4xl tracking-tight font-bold text-primary-800">
            The latest news from the WARF
          </h2>
        </div>

        <div class="grid sm:grid-cols-1 lg:grid-cols-2 ">
          {/* <!-- can help image --> */}
          <div class=" ">
            <img
              class="w-10/12 h-8/12 "
              src={news}
              alt="can_help_banner"
            />
          </div>
          {/* <!-- end can help image --> */}

          <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                  Children’s manifesto expresses hope for better education on AI
                  ahead of Paris AI Action Summit
                </h3>
                <p class="text-sm">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                WARF event at the Houses of Parliament explores impact of AI disinformation on elections
                </h3>
                <p class="text-sm">
                  {" "}
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>
            </div>
            <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                Three researchers named as new Turing AI World-Leading Researcher Fellows
                </h3>
                <p class="text-sm">
                  ur U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                Majority of doctors using AI are optimistic about its benefits
                </h3>
                <p class="text-sm">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
              
            </div>
            
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default NewsLanding;
