import React from "react";
import hero from "../../Assets/Images/hero.png";

const HeroSection = () => {
  return (
    <section
      className="bg-accent"
      style={{ fontFamily: "'Roboto', sans-serif;" }}
    >
      <div className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center ">
        <div>
          <h1 className="text-4xl font-bold mb-10 text-neutral leading-10">
            The definition of advertiser
            <br></br>
            in the world
          </h1>
          <p className="text-neutral font-medium leading-7 text-justify">
            An advertiser is the entity on the buying side of the mobile
            marketing ecosystem. In the context of mobile advertising, the
            advertiser is often an app or brand looking to spread a specific
            message about their product (for example, new user acquisition and
            retargeting campaigns).
          </p>
          <button className="my-btn mt-6">Get Started</button>
        </div>
        <div className="mt-10">
          <img className="md:max-w-lg min-h-full mx-auto" src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
