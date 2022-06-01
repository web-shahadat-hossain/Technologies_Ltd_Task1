import React from "react";
import { NavLink } from "react-router-dom";

const VersatileAdLayout = () => {
  return (
    <div className="py-10">
      <h2 className="text-center pb-5 pt-10 font-bold text-3xl text-secondary">
        VERSATILE AD FORMATS
      </h2>

      <div>
        <div>
          <ul className="grid gap-10 md:grid-cols-2   lg:grid-cols-4 mt-10 justify-center items-center w-10/12 mx-auto text-center">
            <li>
              <NavLink to="/" className="versatile_btn">
                POP-UNDER
              </NavLink>
            </li>
            <li>
              <NavLink className="versatile_btn" to="banner-ad">
                BANNER AD
              </NavLink>
            </li>
            <li>
              <NavLink className="versatile_btn" to="native">
                NATIVE
              </NavLink>
            </li>
            <li>
              <NavLink className="versatile_btn" to="banner-ad">
                SKIM
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VersatileAdLayout;
