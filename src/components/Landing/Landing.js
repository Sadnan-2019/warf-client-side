import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css"
const Landing = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentSlideTwo(index);
    },
    // afternewChange: (index) => {
    //   setCurrentSlideTwo(index);
    // },
    autoplay: "true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
        <div>
            <div className="full-width-slider">
        {/* <h2> Responsive </h2> */}
        <Slider {...settings} className="">
          <div className=" ">
            <section className="landingone  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-left ">
                <div class=" ">
                  <div class="   ">
                    <div class=" text-center ">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl       text-white ${
                          currentSlide === 0 ? "animated" : ""
                        }`}
                      >
                        Welcome to the World AI & Robotics Foundation
                        <br class=" lg:block text-center" />
                        Empowering the Future of Technology
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* second ////  */}
          <div className=" ">
            <section className="landingtwo  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl      text-white ${
                          currentSlide === 1 ? "animated" : ""
                        }`}
                      >
                        AI and robotics are unlocking new frontiers in 
                        <br class=" lg:block" />
                        industries, education, and daily life.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* /// thried  */}

          <div className=" ">
            <section className="landingthree  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl       text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                       Spark curiosity and innovation 
                        <br class=" lg:block" />
                        in the minds shaping tomorrow.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
        </div>
    );
};

export default Landing;