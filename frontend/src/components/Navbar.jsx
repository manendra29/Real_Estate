// import React, { useState } from "react";
// import logo from "../assets/img/logo.png";
// import { Link, NavLink } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// export const Navbar = ({ mobileMenu, setMobileMenu }) => {
//   document.title = "SkyViewEstates Realtors";

//   // Function to handle link click
//   const handleLinkClick = () => {
//     setMobileMenu(false);
//   };

//   return (
//     <>
//       <nav className="block fixed z-[1000] w-[100%] top-0 lg:hidden bg-white shadow-lg">
//         <div className="flex items-center justify-between m-3">
//           <div>
//             <Link to="/">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
//   Manendra's <span className="text-yellow-600">eState</span>
// </h1>

//             </Link>
//           </div>
//           <div>
//             <IconButton
//               sx={{ color: "#1b1364" }}
//               size="large"
//               aria-label="mobile-menu"
//               onClick={() => setMobileMenu(!mobileMenu)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </div>
//         </div>
//       </nav>
//       <nav className="hidden lg:block bg-[#FFFFFF80] rounded-[25px] w-[90%] absolute left-[6%] top-[8%] z-10">
//         <div className="flex justify-between p-3 items-center">
//           <Link to="/">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
//   Manendra's <span className="text-yellow-600">eState</span>
// </h1>

//           </Link>
//           <ul className="flex gap-10">
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/about">About us</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/event">Events</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/services">Services</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/news">News</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/contact">Contact us</NavLink>
//             </li>
//           </ul>
//           <Link
//             to="/brochure"
//             className="font-dmsans px-10 py-2 bg-[#03002E] text-white rounded-[16.5px] uppercase"
//             style={{ boxShadow: "0px 5.46px 13.27px 0px #00000080" }}
//           >
//             Brochure
//           </Link>
//         </div>
//       </nav>

//       <nav
//         className={`fixed shadow-lg z-[100] h-screen bg-[#FFFFFF] w-[70%] text-black transform transition-transform duration-300 ease-in-out ${
//           mobileMenu ? "translate-x-0" : "translate-x-[-100%]"
//         }`}
//       >
//         <div className="p-4">
//           <div className="flex items-center justify-between mx-3">
//             <div>
//               <Link to="/">
//                 <img src={logo} alt="" width={150} />
//               </Link>
//             </div>
//             <div>
//               <IconButton
//                 sx={{ color: "#1b1364" }}
//                 size="large"
//                 aria-label="mobile-menu"
//                 onClick={() => setMobileMenu(!mobileMenu)}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </div>
//           </div>
//           <ul className="flex flex-col ms-5 mt-10 gap-10">
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/about">About us</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/event">Events</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/services">Services</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/news">News</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/contact">Contact us</NavLink>
//             </li>
//             <li className="font-dmsans font-[12.49px]">
//               <NavLink to="/brochure" onClick={handleLinkClick}>
//                 Brochure
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };











import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const Navbar = ({ mobileMenu, setMobileMenu }) => {
  document.title = "SkyView Estates";
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle link click
  const handleLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className={`block fixed z-[1000] w-[100%] top-0 lg:hidden bg-white shadow-lg transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="flex items-center justify-between m-3">
          <div className="transition-transform duration-300 hover:scale-105">
            <Link to="/">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
                SkyView<span className="text-teal-600">Estates</span>
              </h1>
            </Link>
          </div>
          <div>
            <IconButton
              sx={{ color: "#0f766e" }}
              size="large"
              aria-label="mobile-menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="transition-transform duration-300 hover:rotate-180"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className={`hidden lg:block ${scrolled ? 'bg-white shadow-lg' : 'bg-[#FFFFFF90] backdrop-blur-sm'} rounded-[25px] w-[90%] absolute left-[5%] top-[8%] z-10 transition-all duration-500`}>
        <div className="flex justify-between p-3 items-center">
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
              SkyView<span className="text-teal-600">Estates</span>
            </h1>
          </Link>
          <ul className="flex gap-10">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About us" },
              { path: "/event", label: "Events" },
              { path: "/services", label: "Services" },
              { path: "/news", label: "News" },
              { path: "/contact", label: "Contact us" },
            ].map((item) => (
              <li key={item.path} className="font-dmsans text-base relative group">
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `transition-colors duration-300 hover:text-teal-600 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
                >
                  {item.label}
                  <span className="absolute h-0.5 w-0 bg-teal-600 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/brochure"
            className="font-dmsans px-10 py-2 bg-teal-700 text-white rounded-[16.5px] uppercase hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Brochure
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <nav
        className={`fixed shadow-lg z-[100] h-screen bg-gradient-to-b from-white to-teal-50 w-[70%] text-black transform transition-all duration-500 ease-in-out ${
          mobileMenu ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mx-3">
            <div className="transition-transform duration-300 hover:scale-105">
              <Link to="/" onClick={handleLinkClick}>
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
                  SkyView<span className="text-teal-600">Estates</span>
                </h1>
              </Link>
            </div>
            <div>
              <IconButton
                sx={{ color: "#0f766e" }}
                size="large"
                aria-label="close-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="transition-transform duration-300 hover:rotate-180"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <ul className="flex flex-col ms-5 mt-10 gap-8">
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/" 
                onClick={handleLinkClick} 
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <HomeIcon fontSize="small" /> Home
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/about" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <InfoIcon fontSize="small" /> About us
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/event" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <EventIcon fontSize="small" /> Events
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/services" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <BusinessCenterIcon fontSize="small" /> Services
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/news" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <NewspaperIcon fontSize="small" /> News
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/contact" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <ContactMailIcon fontSize="small" /> Contact us
              </NavLink>
            </li>
            <li className="font-dmsans text-base transform transition-all duration-300 hover:translate-x-2">
              <NavLink 
                to="/brochure" 
                onClick={handleLinkClick}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-teal-600 font-bold' : 'text-gray-700'}`}
              >
                <MenuBookIcon fontSize="small" /> Brochure
              </NavLink>
            </li>
          </ul>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-2">
                <ContactMailIcon /> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};