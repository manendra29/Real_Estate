import React from "react";
import { Link } from "react-router-dom";

import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bg-[#03002e] text-white">
      <div className="grid sm:grid-cols-12 gap-5 px-8 mt-10 max-w-[1280px] mx-auto">
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <div className="flex justify-start">
          <h1 class="text-4xl font-bold text-center bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent  tracking-wide">
  SkyViewEstates
</h1>


          </div>
          <p className="font-normal text-xs lg:text-sm py-3 text-justify leading-5 lg:leading-8">
            SkyViewEstates realtors is an accomplished real estate agent firm.
            Drawing from their years of experience they brings a strategic yet
            personal approach to the home buying, selling, and renting process.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex flex-col lg:items-center">
            <h2 className="font-poppins font-semibold  text-sm lg:text-lg  uppercase">
              Areas of Operations
            </h2>
            <ul className="font-normal text-xs lg:text-sm py-3 text-justify list-disc">
              <li className="my-2">Sector-150</li>
              <li className="my-2">Ghaziabad</li>
              <li className="my-2">Noida Expressway</li>
              <li className="my-2">Yamuna Expressway</li>
              <li className="my-2">Siddharth Vihar</li>
              <li className="my-2">Noida Extension</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <div className="flex flex-col">
            <h2 className="font-poppins font-semibold text-sm lg:text-lg uppercase">
              Contact Us
            </h2>
            <ul className="font-normal text-xs lg:text-sm py-3 text-justify">
              <li className="my-2">
              1258 Westbrook Ave, 2nd Floor, Near Central Plaza, Brooklyn, NY 11223, USA
              </li>
              <li className="my-2">mymail@skyviewestates.com</li>
              <li className="my-2">+91-1234567890</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col justify-center items-start lg:items-end">
            <h2 className="font-poppins font-semibold lg:pe-8 text-sm lg:text-lg uppercase">
              Follow us
            </h2>
            <ul className="flex justify-center gap-4 items-center font-normal text-xs lg:text-sm py-3 text-justify">
              <li className="my-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <div className="w-[30px] h-[30px]">
                    <img src={facebook} alt="facebook_logo" />
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a href="#" target="_blank">
                  <div className="w-[30px] h-[30px]">
                    <img src={twitter} alt="twitter_logo" />
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <div className="w-[30px] h-[30px]">
                    <img src={instagram} alt="instagram_logo" />
                  </div>
                </a>
              </li>
              <li className="my-2">
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-9">
        <hr className="text-white opacity-100 w-[80%]" />
      </div>

      <div className="grid sm:grid-cols-12 py-4 text-center max-w-[1280px] mx-auto">
        <div className="sm:col-span-6 col-span-12 flex justify-center sm:mb-0 mb-3">
          <p className="text-xs lg:text-sm">
            © {new Date().getFullYear()} SkyViewEstates Realtors. All Rights
            Reserved.
          </p>
        </div>
        <div className="sm:col-span-3 col-span-6 flex justify-center">
          <p className="text-xs lg:text-sm">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="sm:col-span-3 col-span-6 flex justify-center">
          <p className="text-xs lg:text-sm">Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};
