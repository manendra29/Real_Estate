import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import whatsappfloat from "../assets/img/whatsapp float.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";

export const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      {/* Main Content */}
      <div className="flex-1">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <Footer />

     
      <div className="hidden lg:block fixed bottom-10 left-9 z-50">
        <a
          href="https://wa.me/+911234567890?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services"
          target="_blank"
        >
          <img
            src={whatsappfloat}
            alt="Whatsapp Button"
            className="w-[45px] h-[45px] lg:w-[70px] lg:h-[70px] cursor-pointer "
          />
        </a>
      </div>

      <div className="block lg:hidden fixed bottom-0 w-full z-50">
        <div className="bg-gradient-to-r from-[#042651] to-[#076bcd] text-white">
          <div className="flex item-center justify-between w-[100%]">
            <div className="p-2 flex-1 border border-blue-950">
              <a
                href="https://wa.me/+911234567890?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
              >
                <div className="flex justify-center items-center gap-3">
                  <WhatsAppIcon />
                  <p className="text-sm">Whatsapp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
