import React from "react";
import facebook from "../../Assets/Icons/facebook.png";
import instagram from "../../Assets/Icons/instagram.png";
import youtube from "../../Assets/Icons/youtube.png";

const Footer = () => {
  return (
    <>
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
            text-secondary
            text-2xl
          "
              >
                We are social
              </h6>
              <p className="mb-4 font-bold">FOLLOW US</p>

              <div className="flex mt-10">
                <img style={{ height: "35px" }} src={instagram} alt="" />
                <img style={{ height: "35px" }} src={facebook} alt="" />
                <img style={{ height: "35px" }} src={youtube} alt="" />
              </div>
              <h2 className="text-2xl font-bold text-black mt-5">Logo</h2>
            </div>
            <div className="">
              <h6
                className="uppercase  text-secondary
            text-2xl font-semibold mb-4 flex justify-center md:justify-start"
              >
                Links
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  ADVERTISERS
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  PUBLISHERS
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  INFLUENCERS
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  AD FORMATS
                </a>
              </p>
            </div>
            <div className="">
              <h6
                className="uppercase  text-secondary
            text-2xl font-semibold mb-4 flex justify-center md:justify-start"
              >
                Documentation
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  TERMS & CONDITIONS
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  TERMS & CONDITIONS
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  CANCELLATION POLICY
                </a>
              </p>
              <p>
                <a href="#!" className="text-black font-bold">
                  BLOG
                </a>
              </p>
            </div>
            <div className="">
              <h6
                className="uppercase  text-secondary
            text-2xl font-semibold mb-4 flex justify-center md:justify-start"
              >
                Support
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  FAQ
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  MEDIA KIT
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-black font-bold">
                  CONTACT US
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
