import React from "react";
import native from "../../Assets/Images/n.png";
const Native = () => {
  return (
    <div className="lg:w-10/12 mx-auto ">
      <div className="py-10 gap-x-20 gap-y-5 lg:text-left text-center  grid lg:grid-cols-2 justify-center items-center">
        <div>
          <img
            className="md:max-w-lg rounded min-h-full mx-auto"
            src={native}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-xl text-primary mb-5 font-bold">NATIVE</h3>
          <p className="text-lg font-bold text-justify">
            Ad format with the image and the title, that perfectly fits into the
            content of the site. Native ads are placed in the most visible areas
            of the page and, thus, this format shows good results and the level
            of interaction.
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

export default Native;
