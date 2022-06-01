import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div
      className=" py-2 bg-accent"
      style={{ fontFamily: "'PT Sans', sans-serif" }}
    >
      <div class="navbar  w-11/12 mx-auto">
        <div class="">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  ADVERTISERS
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-start hidden lg:flex w-full">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="link" to="/advertisers">
                ADVERTISERS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/publishers">
                PUBLISHERS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/influencers">
                INFLUENCERS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/ad-formats">
                AD FORMATS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/blog">
                BLOG{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                CONTACT US{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end header_button w-full lg:w-80">
          <button className=" text-xl ">Login</button>
          <button className="header-btn shadow-lg shadow-gray-300 text-xl">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
