import React from "react";
import "./RoboticsLanding.css"
const RoboticsLanding = () => {
  return (
    <div className="full-width-slider">
      <div className="robotics-landing">

      <div class="pt-16 pb-8 mx-auto max-w-5xl px-4 sm:pt-24 justify-center items-center   ">
        <div class="text-center ">
          <h1 class="text-4xl text-white  tracking-tight font-extrabold sm:text-5xl pb-3 md:pb-0 md:text-4xl">
          The core objective of our research is to create a world enriched with data and AI, ensuring benefits for everyone.
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
  );
};

export default RoboticsLanding;
