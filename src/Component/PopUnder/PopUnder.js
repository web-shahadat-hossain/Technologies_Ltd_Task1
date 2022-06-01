import React from "react";
import popUnder from "../../Assets/Images/p.png";
const PopUnder = () => {
  console.log(popUnder);
  return (
    <div className="lg:w-10/12 mx-auto ">
      <div className="py-10 gap-x-20 gap-y-5 lg:text-left text-center  grid lg:grid-cols-2 justify-center items-center">
        <div>
          <img
            className="md:max-w-lg rounded min-h-full mx-auto"
            src={popUnder}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-xl text-primary mb-5 font-bold">POP-UNDER</h3>
          <p className="text-lg font-bold text-justify">
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much.
          </p>

          <button className="mt-20 text-xl text-secondary">
            Learn more{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUnder;
