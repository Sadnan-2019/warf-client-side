import React from 'react';
import robot from "../../assets/robot.png"
import "./Who.css"
const Who = () => {
    return (
        <div> 
 
 <div className="full-width-slider    bg-gradient-to-r from-[#341850] via-[#13011b] to-[#38235D] text-white flex flex-col lg:flex-row items-center justify-center  px-10">
      {/* First Section - Text */}
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-400">
          Empowering
        </h1>
        <h2 className="text-3xl lg:text-4xl font-bold">
          The Future With <span className="text-blue-400">AI & Robotics</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-300">
          Unlocking cutting-edge technology for a smarter, more connected world.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg">
          Explore Now
        </button>
      </div>

      {/* Middle Section - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={robot}
          alt="AI Robot"
          className="w-full max-w-sm lg:max-w-md object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Third Section - Additional Text */}
      <div className="flex-1 text-center lg:text-right flex flex-col justify-center space-y-4">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-blue-400">
            Watch Intro
          </h3>
          <p className="text-lg text-gray-300">
            Our AI and robotics company specializes in developing cutting-edge
            technology for various industries.
          </p>
        </div>
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-blue-400">200+</h3>
          <p className="text-lg text-gray-300">Trusted Companies</p>
        </div>
      </div>
    </div>
 
        </div>
    );
};

export default Who;