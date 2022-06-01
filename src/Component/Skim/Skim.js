import React from "react";
import skim from "../../Assets/Images/s.png";

const Skim = () => {
  return (
    <div className="lg:w-10/12 mx-auto ">
      <div className="py-10 gap-x-20 gap-y-5 lg:text-left text-center  grid lg:grid-cols-2 justify-center items-center">
        <div>
          <img
            className="md:max-w-lg rounded min-h-full mx-auto"
            src={skim}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-xl text-primary mb-5 font-bold">SKIM</h3>
          <p className="text-lg font-bold text-justify">
            SKIM" is a link that a publisher inserts on a specific site element,
            and after clicking on it, an advertisement appears to the user. SKIM
            gives 100% control of your sold traffic amount, higher CR to
            advertisers and CPM rates to publishers.
          </p>

          <button className="mt-20 text-xl text-secondary">
            Learn more <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skim;
