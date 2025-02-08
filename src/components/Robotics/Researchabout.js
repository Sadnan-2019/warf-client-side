import React from "react";
import Banner from "../../assets/research.jpg";
const Researchabout = () => {
  return (
    <div>
      <div className=" blog   py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 justify-center items-center gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            Research
          </p>
          {/* <p
            className=" lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b "
            style={{ lineHeight: "120%", color: "#453364" }}
          >
            medical conditions
          </p> */}

          <p className="max-w-lg mt-7  md:text-[20px] lg:text-[27px] poppins-t text-gray-600 text-justify ">
            Our approach involves exploring fundamental scientific questions,
            leveraging cutting-edge research to address real-world challenges,
            and considering the vital legal, ethical, and societal dimensions of
            these technologies.We direct our research toward bold challenges
            that highlight the transformative potential of AI and data science
            across science, society, and the economy. Achieving these goals
            relies on extensive collaboration and strategic partnerships, not
            just WARF’s efforts alone.
          </p>
        </div>
        <div className="max-w-xl  md:ml-8   mt-10 lg:mt-0">
          <img
            className="lg:w-[100%] w-[90%] mx-auto rounded-lg"
            src={Banner}
            alt=""
          />
        </div>
        {/* <div className="lg:order-2 order-1  lg:-mt-2">
          <img className="lg:w-[100%] w-[90%] mx-auto" src={Banner} alt="" />
        </div> */}
      </div>

      <div className="   md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
        <p
          className="lg:text-[43px] md:text-[30px] font-bold text-[26px]  poppins-b "
          style={{ lineHeight: "120%", color: "#453364" }}
        >
          Our Challenge
        </p>

        <div className="    lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-3   lg:grid-cols-3 justify-center items-center gap-5">
          <div class="flex flex-col justify-center items-center  min-h-screen">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                alt="Mountain"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">
                  Beautiful Mountain View
                </h2>
                <p class="text-gray-700 leading-tight mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eu sapien porttitor, blandit velit ac, vehicula elit.
                  Nunc et ex at turpis rutrum viverra.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center  min-h-screen">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                alt="Mountain"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">
                  Beautiful Mountain View
                </h2>
                <p class="text-gray-700 leading-tight mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eu sapien porttitor, blandit velit ac, vehicula elit.
                  Nunc et ex at turpis rutrum viverra.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center  min-h-screen">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                alt="Mountain"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">
                  Beautiful Mountain View
                </h2>
                <p class="text-gray-700 leading-tight mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eu sapien porttitor, blandit velit ac, vehicula elit.
                  Nunc et ex at turpis rutrum viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researchabout;
