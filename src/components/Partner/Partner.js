import React from 'react';
import Marquee from 'react-fast-marquee';
import popular from "../../assets/BSPRC.PNG"
import universal from "../../assets/partne2.jpg"
import labaidcardiac from "../../assets/partner3.png"
const Partner = () => {
    return (
        <div>

<h2 class="text-4xl sm:text-5xl md:text-4xl text-center chelsea-market-regular font-bold text-[#6b2c86] md:mb-16 mb-10 py-10">
          Our Partner{" "}
        </h2>
              <Marquee   gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	 	 mx-10">
          <img
            src={popular}
            alt="Shoes"
            className="w-20 h-10 "
          />
        </div>
        <div className="       	  mx-10">
          <img
            src={universal}
            alt="Shoes"
            className="  w-52    "
          />
        </div>
        <div className="     	 mx-10 ">
          <img
            src={labaidcardiac}
            alt="Shoes"
            className="      "
          />
        </div>
       
       
        
        
        
       
      

      </Marquee>
        </div>
    );
};

export default Partner;