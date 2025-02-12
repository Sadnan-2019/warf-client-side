import React from "react";
import research from "../../assets/new research-and-development (1).png"
import  global from "../../assets/global.png"
import  Education from "../../assets/education&traninig.png"
import  Collaboration from "../../assets/collaboration.png"
import  advocacy from "../../assets/advocacy.png"
import  start from "../../assets/startup.png"
import  community from "../../assets/comuunity.png"
import  policy from "../../assets/policy.png"
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
              <h2 class="text-4xl font-bold text-white dark:text-black pb-2">
                What WE Do
              </h2>
              <div class="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
                <hr class="border-[3px] border-[#48135e] dark:border-green-600 w-[20%]" />
              </div>
            </div>

            <div class=" text-center  grid md:grid-cols-3 grid-cols-1 gap-4 mt-8">
              {/* <!-- 1 --> */}
              <div class="card flex flex-col justify-center items-center   ">
                
                  <img
                   src={research} class="w-16 mb-4" alt=""
                   
                  /> 
              

                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold text-white  ">
                    Research & Development
                  </p>
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
              <div class=" card flex flex-col justify-center items-center">
              <img
                   src={global} class="w-16 mb-4" alt=""
                   
                  /> 

                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold text-white  ">
                    Global Events & Conferences
                  </p>
                  <p class="text-white  text-justify">
                    Connecting visionaries through inspiring talks, workshops,
                    and exhibitions. Our events foster collaboration, spark
                    creativity, and showcase the latest breakthroughs in AI and
                    robotics.
                  </p>
                </div>
              </div>

              {/* <!-- 3 --> */}
              <div class=" card flex flex-col justify-center items-center">
              <img
                   src={Education} class="w-16 mb-4" alt=""
                   
                  /> 

                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold text-white dark:text-black">
                    Education & Training
                  </p>
                  <p class="text-white  ">
                    Equipping the next generation of tech leaders with knowledge
                    and hands-on skills. We provide certifications, online
                    courses, and mentorship programs to inspire future
                    innovators.
                  </p>
                </div>
              </div>
              {/* <!-- 4 --> */}
              <div class="card flex flex-col justify-center items-center   ">
                
                <img
                 src={Collaboration} class="w-16 mb-4" alt=""
                 
                /> 
                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold text-white dark:text-black">
                    Collaboration & Innovation
                  </p>
                  <p class="text-white">
                    Bridging the gap between industries, academia, and
                    governments to create a unified global impact. Our
                    partnerships accelerate progress and drive sustainable
                    solutions for communities worldwide.
                  </p>
                </div>
              </div>
              {/* <!-- 5 --> */}
              <div class="card flex flex-col justify-center items-center   ">
                
                <img
                 src={advocacy} class="w-16 mb-4" alt=""
                 
                />
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Ethical AI Advocacy
                  </h3>
                  <p class="text-white">
                    Promoting responsible AI development and usage. We ensure
                    that ethics, transparency, and inclusivity remain central to
                    technological advancements.
                  </p>
                </div>
              </div>
              {/* <!-- 6 --> */}
              <div class="card flex flex-col justify-center items-center   ">
                
                <img
                 src={start} class="w-16 mb-4" alt=""
                 
                />
                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold text-white dark:text-black">
                    Start-up Support & Incubation
                  </p>
                  <p class="text-white  ">
                    Empowering entrepreneurs by providing resources, funding,
                    and mentorship to transform visionary ideas into successful
                    AI and robotics businesses.
                  </p>
                </div>
              </div>
              <div class="card flex flex-col justify-center items-center   ">
                
                <img
                 src={community} class="w-16 mb-4" alt=""
                 
                />
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                    Community Engagement
                  </h3>
                  <p class="text-white  ">
                    Building a global community of enthusiasts, educators, and
                    innovators. Through hackathons, meetups, and outreach
                    programs, we inspire participation at every level.
                  </p>
                </div>
              </div>
              <div class="card flex flex-col justify-center items-center   ">
                
                <img
                 src={policy} class="w-16 mb-4" alt=""
                 
                />
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-semibold text-white dark:text-black">
                  Policy & Governance
                  </h3>
                  <p class="text-white">
                    Empowering entrepreneurs by providing resources, funding,
                    and mentorship to transform visionary ideas into successful
                    AI and robotics businesses.
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
