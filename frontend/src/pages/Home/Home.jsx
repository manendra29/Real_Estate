import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

import "./Home.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import { Choose } from "../../components/Choose";
import { Testimonials } from "../../components/Testimonials";

import { Typewriter } from "react-simple-typewriter";

import PureCounter from "@srexi/purecounterjs";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/img/Icon.png";
import Icon2 from "../../assets/img/Icon (1).png";
import Icon3 from "../../assets/img/Icon (2).png";
import home from "../../assets/img/home.png";
import house from "../../assets/img/house.png";
import EastIcon from "@mui/icons-material/East";
import { Card } from "../../components/Card";
import { Button } from "@mui/material";
import { Marquee } from "../../components/Marquee";
import { LatestNews } from "../../components/LatestNews";
import { Calculator } from "../../components/Calculator";
import CalculateIcon from "@mui/icons-material/Calculate";
import { SearchBar } from "../../components/SearchBar";
import CancelIcon from "@mui/icons-material/Cancel";
import findRealEstate from "../../assets/img/find real estate.jpg";
import keys from "../../assets/img/keys.jpeg";
import realtor from "../../assets/img/meet realtor.jpeg";

export const Home = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  const [calculator, setCalculator] = useState(false);

  return (
    <Layout>
      {/* Hero  */}
      <div className="homeBanner overflow-hidden relative h-screen flex flex-col items-center lg:items-start justify-center lg:ps-24 ">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-medium mt-14 lg:mt-24">
            Find your next{" "}
            <Typewriter
              words={["best cozy place", "dream home", "office"]}
              loop={0}
              cursor
            />
          </h1>
        </div>
        <div className="my-5 lg:my-10">
          <p className="font-dmsans text-center font-normal text-sm lg:text-lg lg:text-left px-5 lg:px-0">
            Find the best places around you at the cheapest and affordable
            prices.
          </p>
        </div>

        <SearchBar />

        <div
          className={`hidden lg:block absolute right-0 top-[24%] rounded-lg transition-transform duration-500 ease-in-out ${
            calculator ? "translate-x-[0]" : "translate-x-[90%]"
          }`}
        >
          <div className="flex justify-center items-center cursor-pointer">
            <div
              className="bg-white rounded-s-lg"
              onClick={() => {
                setCalculator(!calculator);
              }}
            >
              <p
                className="font-medium uppercase py-4 px-2"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {calculator ? "Close" : `Calculate EMI`}
              </p>
              {calculator ? (
                <CancelIcon color="error" sx={{ fontSize: "35px" }} />
              ) : (
                <CalculateIcon sx={{ fontSize: "50px", color: "#03002e" }} />
              )}
            </div>
            <Calculator />
          </div>
        </div>
      </div>

      <div className="block lg:hidden p-5">
        <Calculator />
      </div>

      {/* Featured Projects  */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-4xl text-2xl font-bold py-8 lg:font-medium">
          New Launches
        </h1>
        <Card category="New Launches" />
        <div className="flex justify-center my-3">
          <Link to={"/property/new-launches"}>
            <Button
              size="large"
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                backgroundColor: "#03002e",
                color: "white",
                textTransform: "none",
              }}
            >
              View all
            </Button>
          </Link>
        </div>
      </div>

      {/* Luxury Project */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-4xl text-2xl font-bold py-8 lg:font-medium">
          Luxury Living
        </h1>
        <Card category="Luxury Living" />
        <div className="flex justify-center my-3">
          <Link to={"/property/luxury-living"}>
            <Button
              size="large"
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                backgroundColor: "#03002e",
                color: "white",
                textTransform: "none",
              }}
            >
              View all
            </Button>
          </Link>
        </div>
      </div>

      {/* More than 10 years of experience  */}
      <div className="bg-[#03002e] text-white my-10 experience">
        <div className="max-w-[1280px] mx-auto py-10">
          <h1 className="text-xl text-center lg:text-4xl font-poppins font-bold py-4">
            More than 10 Years of Experience
          </h1>
          <p className="text-sm py-3 lg:py-5 text-center lg:text-lg font-poppins font-medium lg:me-10 me-0 px-3 lg:px-0">
            Over the years, SkyViewEstates has built a reputation for providing a
            seamless experience to customers to secure their dream homes.
          </p>
          <div className="flex flex-wrap justify-center lg:grid sm:grid-cols-12">
            <div className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <ApartmentIcon
                  sx={{
                    fontSize: { xs: 50, sm: 75, md: 100 },
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="5000"
                      data-purecounter-duration="3"
                    >
                      5000
                    </span>
                  </p>
                  <p className="font-poppins font-medium text-sm lg:text-lg">
                    Units Sold
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3  rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <EmojiEmotionsIcon
                  sx={{
                    fontSize: { xs: 50, sm: 75, md: 100 },
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="2000"
                      data-purecounter-duration="3"
                    >
                      2000
                    </span>
                  </p>
                  <p className="font-poppins font-medium text-sm lg:text-lg">
                    Happy Users
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <AspectRatioIcon
                  sx={{
                    fontSize: { xs: 50, sm: 75, md: 100 },
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-duration="3"
                      data-purecounter-suffix="+"
                    >
                      10+
                    </span>
                  </p>
                  <p className="font-poppins font-medium text-center text-sm lg:text-lg">
                    Year of Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <AccessibilityNewIcon
                  sx={{
                    fontSize: { xs: 50, sm: 75, md: 100 },
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="30"
                      data-purecounter-duration="3"
                    >
                      30
                    </span>
                  </p>
                  <p className="font-poppins font-medium text-sm lg:text-lg">
                    Employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Properties  */}
      <div className="bg-white">
        <h1 className="text-center text-black  text-2xl lg:text-4xl font-bold py-8 lg:font-medium">
          Affordable Living
        </h1>
        <Card category="Affordable Living" />
        <div className="flex justify-center my-3">
          <Link to={"/property/affordable-living"}>
            <Button
              size="large"
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                backgroundColor: "#03002e",
                color: "white",
                textTransform: "none",
              }}
            >
              View all
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] my-10">
        <div className="grid sm:grid-cols-12">
          <div className="hidden md:flex col-span-12 md:col-span-6 lg:col-span-7 justify-center">
            <div className="grid sm:grid-cols-12">
              <div className="col-span-12">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-8 m-5">
                    <img
                      src={findRealEstate}
                      alt=""
                      className="rounded-lg h-[250px] w-[100%] object-fill"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-5 mx-5">
                    <img
                      src={realtor}
                      alt=""
                      className="rounded-lg h-[200px] w-full object-cover"
                    />
                  </div>
                  <div className="col-span-5">
                    <img
                      src={keys}
                      alt=""
                      className="rounded-lg h-[400px] w-full object-fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6  lg:col-span-5 flex flex-col justify-center lg:ps-14">
            <h1 className="px-5 text-[#1A1A1A] font-roboto  text-2xl lg:text-4xl font-medium text-center lg:text-start mt-4 lg:mt-0">
              How It works? <br />
              Find a perfect home
            </h1>
            <p className="font-roboto text-md lg:text-lg text-[#1A1A1A] px-5 mt-5">
              Discover your ideal home with ease. Browse listings, get expert
              advice, and find the perfect match for your lifestyle.
            </p>
            <ul className="my-10 flex flex-col gap-10 lg:mx-0 mx-5 ps-6 lg:ps-4">
              <li>
                <div className="flex gap-5">
                  <div className="relative basis-[10%]">
                    <img src={Icon1} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[8%]"></div>
                  </div>
                  <div className="flex-col basis-[90%]">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Find Real Estate
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Finding your dream property has never been easier. With
                      SkyViewEstates Realtors, you access extensive listings, and
                      expert guidance for a seamless real estate journey. Start
                      exploring today and discover your perfect home.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <div className="relative basis-[10%]">
                    <img src={Icon2} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[10%]"></div>
                  </div>
                  <div className="flex-col basis-[90%]">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Meet Realtor
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Connect with trusted real estate professionals who
                      understand your needs and priorities.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <div className="relative basis-[10%]">
                    <img src={Icon3} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[10%]"></div>
                  </div>
                  <div className="flex-col basis-[90%]">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Take the keys
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Unlock your future with confidence. Take the Home Keys and
                      step into your new beginning with expert guidance and
                      support.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials />
      <Choose />

      <LatestNews />

      <div className="max-w-[1280px] mx-auto my-10">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 lg:col-span-6 m-5">
            <div className="bg-[#F9F9F9] font-roboto p-8 lg:p-14 rounded-lg">
              <div className="grid sm:grid-cols-12">
                <div className="col-span-12 lg:col-span-9">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-medium text-lg lg:text-2xl">
                      Looking for the new home?
                    </h4>
                    <p className="hidden lg:block text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                      Let us help you find the perfect place to suit your needs
                      and lifestyle.
                    </p>
                    <div className="flex lg:hidden justify-between">
                      <p className="basis-[60%] text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                        Let us help you find the perfect place to suit your
                        needs and lifestyle.
                      </p>
                      <img src={home} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <Link to={"/contact"}>
                      <button className="bg-[#1F4B43] rounded-lg text-white w-[50%] lg:w-[150px] text-sm py-1 lg:py-3 flex items-center justify-center gap-2 mt-8">
                        Contact us
                        <EastIcon size="small" sx={{ fontSize: "15px" }} />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
                  <img src={home} alt="" className="w-[130px] h-[130px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 m-5">
            <div className="bg-[#FFF8F6] font-roboto p-8 lg:p-14 rounded-lg">
              <div className="grid sm:grid-cols-12">
                <div className="col-span-12 lg:col-span-9">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-medium text-lg lg:text-2xl">
                      Want to sell your home?
                    </h4>
                    <p className="hidden lg:block text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                      Let our experts help you get the best price with a
                      seamless selling experience.
                    </p>
                    <div className="flex lg:hidden justify-between">
                      <p className="basis-[60%] text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                        Let our experts help you get the best price with a
                        seamless selling experience.
                      </p>
                      <img src={house} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <Link to={"/contact"}>
                      <button className="bg-[#1F4B43] rounded-lg text-white w-[50%] lg:w-[150px] text-sm py-1 lg:py-3 flex items-center justify-center gap-2 mt-8">
                        Contact us
                        <EastIcon size="small" sx={{ fontSize: "15px" }} />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
                  <img src={house} alt="" className="w-[130px] h-[130px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </Layout>
  );
};

// import React, { useEffect, useState } from "react";
// import { Layout } from "../../components/Layout";
// import { motion } from "framer-motion"; // Adding animation library

// import "./Home.css";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
// import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import { Choose } from "../../components/Choose";
// import { Testimonials } from "../../components/Testimonials";

// import { Typewriter } from "react-simple-typewriter";

// import PureCounter from "@srexi/purecounterjs";
// import { Link } from "react-router-dom";
// import Icon1 from "../../assets/img/Icon.png";
// import Icon2 from "../../assets/img/Icon (1).png";
// import Icon3 from "../../assets/img/Icon (2).png";
// import home from "../../assets/img/home.png";
// import house from "../../assets/img/house.png";
// import EastIcon from "@mui/icons-material/East";
// import { Card } from "../../components/Card";
// import { Button } from "@mui/material";
// import { Marquee } from "../../components/Marquee";
// import { LatestNews } from "../../components/LatestNews";
// import { Calculator } from "../../components/Calculator";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import { SearchBar } from "../../components/SearchBar";
// import CancelIcon from "@mui/icons-material/Cancel";
// import findRealEstate from "../../assets/img/find real estate.jpg";
// import keys from "../../assets/img/keys.jpeg";
// import realtor from "../../assets/img/meet realtor.jpeg";

// // Animation variants for elements
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// const staggerChildren = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// };

// export const Home = () => {
//   useEffect(() => {
//     new PureCounter();
//   }, []);

//   const [calculator, setCalculator] = useState(false);

//   return (
//     <Layout>
//       {/* Hero  */}
//       <motion.div 
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//         className="homeBanner overflow-hidden relative h-screen flex flex-col items-center lg:items-start justify-center lg:ps-24"
//       >
//         <div className="text-center">
//           <motion.h1 
//             variants={fadeIn}
//             className="text-3xl lg:text-5xl font-medium mt-14 lg:mt-24"
//           >
//             Find your next{" "}
//             <Typewriter
//               words={["perfect sanctuary", "dream home", "investment property", "luxury retreat"]}
//               loop={0}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </motion.h1>
//         </div>
//         <motion.div 
//           variants={fadeIn}
//           className="my-5 lg:my-10"
//         >
//           <p className="font-dmsans text-center font-normal text-sm lg:text-xl lg:text-left px-5 lg:px-0">
//             Discover exceptional properties at competitive prices, tailored to your lifestyle needs.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={fadeIn}
//         >
//           <SearchBar />
//         </motion.div>

//         <div
//           className={`hidden lg:block absolute right-0 top-[24%] rounded-lg transition-transform duration-500 ease-in-out ${
//             calculator ? "translate-x-[0]" : "translate-x-[90%]"
//           }`}
//         >
//           <div className="flex justify-center items-center cursor-pointer">
//             <div
//               className="bg-white rounded-s-lg shadow-lg"
//               onClick={() => {
//                 setCalculator(!calculator);
//               }}
//             >
//               <p
//                 className="font-medium uppercase py-4 px-2"
//                 style={{
//                   writingMode: "vertical-rl",
//                   transform: "rotate(180deg)",
//                 }}
//               >
//                 {calculator ? "Close" : `Calculate EMI`}
//               </p>
//               {calculator ? (
//                 <CancelIcon color="error" sx={{ fontSize: "35px" }} />
//               ) : (
//                 <CalculateIcon sx={{ fontSize: "50px", color: "#03002e" }} />
//               )}
//             </div>
//             <Calculator />
//           </div>
//         </div>
//       </motion.div>

//       <div className="block lg:hidden p-5">
//         <Calculator />
//       </div>

//       {/* Featured Projects  */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="bg-white py-6"
//       >
//         <h1 className="text-center text-black lg:text-4xl text-2xl font-bold py-8 lg:font-medium">
//           <span className="border-b-4 border-yellow-600 pb-2">New Launches</span>
//         </h1>
//         <Card category="New Launches" />
//         <div className="flex justify-center my-3">
//           <Link to={"/property/new-launches"}>
//             <Button
//               size="large"
//               variant="contained"
//               endIcon={<EastIcon />}
//               sx={{
//                 backgroundColor: "#03002e",
//                 color: "white",
//                 textTransform: "none",
//                 borderRadius: "30px",
//                 padding: "10px 25px",
//                 boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//                 "&:hover": {
//                   backgroundColor: "#070050",
//                   transform: "translateY(-2px)",
//                   transition: "all 0.3s ease"
//                 }
//               }}
//             >
//               View all
//             </Button>
//           </Link>
//         </div>
//       </motion.div>

//       {/* Luxury Project */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="bg-white py-6"
//       >
//         <h1 className="text-center text-black lg:text-4xl text-2xl font-bold py-8 lg:font-medium">
//           <span className="border-b-4 border-yellow-600 pb-2">Luxury Living</span>
//         </h1>
//         <Card category="Luxury Living" />
//         <div className="flex justify-center my-3">
//           <Link to={"/property/luxury-living"}>
//             <Button
//               size="large"
//               variant="contained"
//               endIcon={<EastIcon />}
//               sx={{
//                 backgroundColor: "#03002e",
//                 color: "white",
//                 textTransform: "none",
//                 borderRadius: "30px",
//                 padding: "10px 25px",
//                 boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//                 "&:hover": {
//                   backgroundColor: "#070050",
//                   transform: "translateY(-2px)",
//                   transition: "all 0.3s ease"
//                 }
//               }}
//             >
//               View all
//             </Button>
//           </Link>
//         </div>
//       </motion.div>

//       {/* More than 10 years of experience  */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="bg-gradient-to-r from-[#020024] to-[#03002e] text-white my-10 experience"
//       >
//         <div className="max-w-[1280px] mx-auto py-16">
//           <h1 className="text-xl text-center lg:text-4xl font-poppins font-bold py-4">
//             Decade of Excellence in Real Estate
//           </h1>
//           <p className="text-sm py-3 lg:py-5 text-center lg:text-lg font-poppins font-medium lg:me-10 me-0 px-3 lg:px-0">
//             Over the years, Pinnacle Estates has built a reputation for providing a
//             seamless experience to clients seeking their dream properties.
//           </p>
//           <motion.div 
//             variants={staggerChildren}
//             className="flex flex-wrap justify-center lg:grid sm:grid-cols-12"
//           >
//             <motion.div 
//               variants={fadeIn}
//               className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105 experience-card"
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <ApartmentIcon
//                   sx={{
//                     fontSize: { xs: 50, sm: 75, md: 100 },
//                     paddingTop: "10px",
//                     paddingBottom: "10px",
//                     transition: "color 0.3s ease-in-out",
//                   }}
//                   className="experience-icon"
//                 />
//                 <div className="flex flex-col gap-1 my-4">
//                   <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
//                     <span
//                       className="purecounter"
//                       data-purecounter-start="0"
//                       data-purecounter-end="5000"
//                       data-purecounter-duration="3"
//                     >
//                       5000
//                     </span>
//                   </p>
//                   <p className="font-poppins font-medium text-sm lg:text-lg">
//                     Properties Sold
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div 
//               variants={fadeIn}
//               className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105 experience-card"
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <EmojiEmotionsIcon
//                   sx={{
//                     fontSize: { xs: 50, sm: 75, md: 100 },
//                     paddingTop: "10px",
//                     paddingBottom: "10px",
//                     transition: "color 0.3s ease-in-out",
//                   }}
//                   className="experience-icon"
//                 />
//                 <div className="flex flex-col gap-1 my-4">
//                   <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
//                     <span
//                       className="purecounter"
//                       data-purecounter-start="0"
//                       data-purecounter-end="2000"
//                       data-purecounter-duration="3"
//                     >
//                       2000
//                     </span>
//                   </p>
//                   <p className="font-poppins font-medium text-sm lg:text-lg">
//                     Satisfied Clients
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div 
//               variants={fadeIn}
//               className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105 experience-card"
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <AspectRatioIcon
//                   sx={{
//                     fontSize: { xs: 50, sm: 75, md: 100 },
//                     paddingTop: "10px",
//                     paddingBottom: "10px",
//                     transition: "color 0.3s ease-in-out",
//                   }}
//                   className="experience-icon"
//                 />
//                 <div className="flex flex-col gap-1 my-4">
//                   <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
//                     <span
//                       className="purecounter"
//                       data-purecounter-start="0"
//                       data-purecounter-end="10"
//                       data-purecounter-duration="3"
//                       data-purecounter-suffix="+"
//                     >
//                       10+
//                     </span>
//                   </p>
//                   <p className="font-poppins font-medium text-center text-sm lg:text-lg">
//                     Years of Excellence
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div 
//               variants={fadeIn}
//               className="basis-1/4 col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105 experience-card"
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <AccessibilityNewIcon
//                   sx={{
//                     fontSize: { xs: 50, sm: 75, md: 100 },
//                     paddingTop: "10px",
//                     paddingBottom: "10px",
//                     transition: "color 0.3s ease-in-out",
//                   }}
//                   className="experience-icon"
//                 />
//                 <div className="flex flex-col gap-1 my-4">
//                   <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
//                     <span
//                       className="purecounter"
//                       data-purecounter-start="0"
//                       data-purecounter-end="30"
//                       data-purecounter-duration="3"
//                     >
//                       30
//                     </span>
//                   </p>
//                   <p className="font-poppins font-medium text-sm lg:text-lg">
//                     Expert Agents
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Top Properties  */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="bg-white py-6"
//       >
//         <h1 className="text-center text-black text-2xl lg:text-4xl font-bold py-8 lg:font-medium">
//           <span className="border-b-4 border-yellow-600 pb-2">Affordable Living</span>
//         </h1>
//         <Card category="Affordable Living" />
//         <div className="flex justify-center my-3">
//           <Link to={"/property/affordable-living"}>
//             <Button
//               size="large"
//               variant="contained"
//               endIcon={<EastIcon />}
//               sx={{
//                 backgroundColor: "#03002e",
//                 color: "white",
//                 textTransform: "none",
//                 borderRadius: "30px",
//                 padding: "10px 25px",
//                 boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//                 "&:hover": {
//                   backgroundColor: "#070050",
//                   transform: "translateY(-2px)",
//                   transition: "all 0.3s ease"
//                 }
//               }}
//             >
//               View all
//             </Button>
//           </Link>
//         </div>
//       </motion.div>

//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="mx-auto max-w-[1280px] my-16"
//       >
//         <div className="grid sm:grid-cols-12">
//           <div className="hidden md:flex col-span-12 md:col-span-6 lg:col-span-7 justify-center">
//             <div className="grid sm:grid-cols-12">
//               <div className="col-span-12">
//                 <div className="grid sm:grid-cols-12">
//                   <motion.div 
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                     className="col-span-8 m-5"
//                   >
//                     <img
//                       src={findRealEstate}
//                       alt="Find real estate"
//                       className="rounded-lg h-[250px] w-[100%] object-cover shadow-lg"
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//               <div className="col-span-12">
//                 <div className="grid sm:grid-cols-12">
//                   <motion.div 
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                     className="col-span-5 mx-5"
//                   >
//                     <img
//                       src={realtor}
//                       alt="Meet realtor"
//                       className="rounded-lg h-[200px] w-full object-cover shadow-lg"
//                     />
//                   </motion.div>
//                   <motion.div 
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                     className="col-span-5"
//                   >
//                     <img
//                       src={keys}
//                       alt="Keys"
//                       className="rounded-lg h-[400px] w-full object-cover shadow-lg"
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <motion.div 
//             variants={fadeIn}
//             className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center lg:ps-14"
//           >
//             <h1 className="px-5 text-[#1A1A1A] font-roboto text-2xl lg:text-4xl font-medium text-center lg:text-start mt-4 lg:mt-0">
//               How It works? <br />
//               <span className="text-yellow-600">Find a perfect home</span>
//             </h1>
//             <p className="font-roboto text-md lg:text-lg text-[#1A1A1A] px-5 mt-5">
//               Discover your ideal home with ease. Browse curated listings, receive expert
//               guidance, and find the perfect match for your lifestyle and budget.
//             </p>
//             <motion.ul 
//               variants={staggerChildren}
//               className="my-10 flex flex-col gap-10 lg:mx-0 mx-5 ps-6 lg:ps-4"
//             >
//               <motion.li 
//                 variants={fadeIn}
//                 whileHover={{ x: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="flex gap-5">
//                   <div className="relative basis-[10%]">
//                     <img src={Icon1} alt="" className="w-[35px] h-[35px] z-10 relative" />
//                     <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[8%] z-0"></div>
//                   </div>
//                   <div className="flex-col basis-[90%]">
//                     <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
//                       Find Real Estate
//                     </h1>
//                     <p className="mt-2 text-sm lg:text-lg">
//                       Finding your dream property has never been easier. With
//                       Pinnacle Estates, you access extensive listings and
//                       expert guidance for a seamless real estate journey. Start
//                       exploring today and discover your perfect home.
//                     </p>
//                   </div>
//                 </div>
//               </motion.li>
//               <motion.li 
//                 variants={fadeIn}
//                 whileHover={{ x: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="flex gap-5">
//                   <div className="relative basis-[10%]">
//                     <img src={Icon2} alt="" className="w-[35px] h-[35px] z-10 relative" />
//                     <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[10%] z-0"></div>
//                   </div>
//                   <div className="flex-col basis-[90%]">
//                     <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
//                       Meet Your Agent
//                     </h1>
//                     <p className="mt-2 text-sm lg:text-lg">
//                       Connect with our trusted real estate professionals who
//                       understand your unique needs and priorities to find the perfect property match.
//                     </p>
//                   </div>
//                 </div>
//               </motion.li>
//               <motion.li 
//                 variants={fadeIn}
//                 whileHover={{ x: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="flex gap-5">
//                   <div className="relative basis-[10%]">
//                     <img src={Icon3} alt="" className="w-[35px] h-[35px] z-10 relative" />
//                     <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] top-[10%] z-0"></div>
//                   </div>
//                   <div className="flex-col basis-[90%]">
//                     <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
//                       Get Your Keys
//                     </h1>
//                     <p className="mt-2 text-sm lg:text-lg">
//                       Unlock your future with confidence. Take possession of your new home
//                       with our comprehensive support and guidance every step of the way.
//                     </p>
//                   </div>
//                 </div>
//               </motion.li>
//             </motion.ul>
//           </motion.div>
//         </div>
//       </motion.div>

//       <Testimonials />
//       <Choose />

//       <LatestNews />

//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeIn}
//         className="max-w-[1280px] mx-auto my-16"
//       >
//         <div className="grid sm:grid-cols-12 gap-6">
//           <motion.div 
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//             className="col-span-12 lg:col-span-6 m-5 transform hover:shadow-xl transition-all duration-300"
//           >
//             <div className="bg-[#F9F9F9] font-roboto p-8 lg:p-14 rounded-lg border-l-4 border-yellow-600">
//               <div className="grid sm:grid-cols-12">
//                 <div className="col-span-12 lg:col-span-9">
//                   <div className="flex flex-col gap-4">
//                     <h4 className="font-medium text-lg lg:text-2xl">
//                       Looking for your dream home?
//                     </h4>
//                     <p className="hidden lg:block text-sm lg:text-lg font-normal lg:pe-20 text-justify">
//                       Let us help you find the perfect place that matches your dreams, needs, and lifestyle.
//                     </p>
//                     <div className="flex lg:hidden justify-between">
//                       <p className="basis-[60%] text-sm lg:text-lg font-normal lg:pe-20 text-justify">
//                         Let us help you find the perfect place that matches your dreams, needs, and lifestyle.
//                       </p>
//                       <img src={home} alt="" className="w-[80px] h-[80px]" />
//                     </div>
//                     <Link to={"/contact"}>
//                       <motion.button 
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-[#03002e] rounded-full text-white w-[50%] lg:w-[150px] text-sm py-2 lg:py-3 flex items-center justify-center gap-2 mt-8 shadow-md hover:shadow-lg transition-all duration-300"
//                       >
//                         Contact us
//                         <EastIcon size="small" sx={{ fontSize: "15px" }} />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
//                   <img src={home} alt="" className="w-[130px] h-[130px]" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <motion.div 
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//             className="col-span-12 lg:col-span-6 m-5 transform hover:shadow-xl transition-all duration-300"
//           >
//             <div className="bg-[#FFF8F6] font-roboto p-8 lg:p-14 rounded-lg border-l-4 border-yellow-600">
//               <div className="grid sm:grid-cols-12">
//                 <div className="col-span-12 lg:col-span-9">
//                   <div className="flex flex-col gap-4">
//                     <h4 className="font-medium text-lg lg:text-2xl">
//                       Want to sell your property?
//                     </h4>
//                     <p className="hidden lg:block text-sm lg:text-lg font-normal lg:pe-20 text-justify">
//                       Our experts will help you get the best price with a
//                       stress-free, streamlined selling experience.
//                     </p>
//                     <div className="flex lg:hidden justify-between">
//                       <p className="basis-[60%] text-sm lg:text-lg font-normal lg:pe-20 text-justify">
//                         Our experts will help you get the best price with a
//                         stress-free, streamlined selling experience.
//                       </p>
//                       <img src={house} alt="" className="w-[80px] h-[80px]" />
//                     </div>
//                     <Link to={"/contact"}>
//                       <motion.button 
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-[#03002e] rounded-full text-white w-[50%] lg:w-[150px] text-sm py-2 lg:py-3 flex items-center justify-center gap-2 mt-8 shadow-md hover:shadow-lg transition-all duration-300"
//                       >
//                         Contact us
//                         <EastIcon size="small" sx={{ fontSize: "15px" }} />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
//                   <img src={house} alt="" className="w-[130px] h-[130px]" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <Marquee />
//     </Layout>
//   );
// };