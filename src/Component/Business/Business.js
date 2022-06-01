import React from "react";
import "./business.css";
import img1 from "../../Assets/Icons/1.png";
import img3 from "../../Assets/Icons/2.png";
import img2 from "../../Assets/Icons/3.png";
const Business = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-center pb-5 pt-10 font-bold text-3xl text-secondary">
        AVAILABLE FOR EVERYONE
      </h2>
      <h4 className="text-center text-xl font-bold">Here will be a text</h4>
      <div className="grid gap-10  md:grid-cols-3 justify-center items-center py-10 w-10/12 mx-auto text-center">
        <div>
          <div className="business">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src={img1} />
              </div>
            </div>
          </div>
          <button className="business_btn">Hello 1</button>
        </div>
        <div>
          <div className="business">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src={img3} />
              </div>
            </div>
          </div>
          <button className="business_btn">Hello 1</button>
        </div>
        <div>
          <div className="business ">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src={img2} />
              </div>
            </div>
          </div>
          <button className="business_btn ">Hello 1</button>
        </div>
      </div>
    </div>
  );
};

export default Business;
