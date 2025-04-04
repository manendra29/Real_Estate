// import React from "react";
// import { Layout } from "../../components/Layout";

// import "./About.css";

// import aboutImg from "../../assets/img/aboutImg.png";
// import aboutImg2 from "../../assets/img/aboutImg2.png";
// import { Choose } from "../../components/Choose";
// import { Testimonials } from "../../components/Testimonials";

// import founder from "../../assets/img/ankitgoyal.jpeg";
// import coFounder from "../../assets/img/tushargupta.jpg";
// import whatwedo from "../../assets/img/17.png";
// import { NavigationBar } from "../../components/NavigationBar";
// import { AwardComponent } from "../../components/AwardComponent";
// import { Button } from "@mui/material";
// import EastIcon from "@mui/icons-material/East";
// import { Link } from "react-router-dom";

// import bgImage from "../../assets/img/img4.jpg";

// export const About = () => {
//   return (
//     <Layout>
//       {/* About Hero  */}
//       <div className="aboutbanner flex items-center justify-center">
//         <div className="grid sm:grid-cols-12">
//           <div className="col-span-12 text-center mt-10 lg:mt-20">
//             <h1 className="font-dmsans text-center font-medium text-white text-3xl lg:text-4xl">
//               About Us
//             </h1>
//           </div>
//         </div>
//       </div>

//       <NavigationBar />

//       {/* welcome to SkyViewEstates  */}
//       <div className="my-8 mx-auto max-w-[1280px]">
//         <h1 className="font-roboto text-xl lg:text-4xl text-center font-medium lg:mt-16">
//           <span className="text-gray-500">Welcome To </span>
//           SkyViewEstates Realtors
//         </h1>

//         <div className="grid sm:grid-cols-12 my-6">
//           <div className="col-span-12 lg:col-span-6 flex flex-col mt-3 lg:mt-6 items-start gap-3">
//             <p className="font-poppins text-sm lg:text-lg lg:leading-9 text-justify text-gray-700 px-8">
//               SkyViewEstates Realtors is a highly regarded and accomplished real
//               estate agency with a proven track record of success. Leveraging
//               years of experience in the industry, the firm combines a strategic
//               approach with a personalized touch to guide clients through every
//               step of the home buying, and selling process. Whether clients are
//               looking to purchase their first home or sell an existing property,
//               SkyViewEstates Realtors takes the time to understand their unique
//               needs and aspirations.
//             </p>
//             <p className="font-poppins text-sm lg:text-lg lg:leading-9 text-justify text-gray-700 px-8">
//               SkyViewEstates Realtors is a highly regarded and accomplished real
//               estate agency with a proven track record of success. Leveraging
//               years of experience in the industry
//             </p>
//             <p className="font-poppins text-sm lg:text-lg lg:leading-9 text-justify text-gray-700 px-8">
//               SkyViewEstates Realtors is a highly regarded and accomplished real
//               estate agency with a proven track record of success. Leveraging
//               years of experience in the industry
//             </p>
//           </div>

//           <div className="col-span-12 lg:col-span-6 flex items-center justify-center mt-8 lg:mt-0 lg:justify-end ">
//             <img
//               src={aboutImg}
//               alt="about-welcome-image"
//               className="h-[280px] lg:h-[400px] w-[480px] mx-5"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="my-5 max-w-[1280px] mx-auto">
//         <h1 className="text-center text-xl lg:text-4xl font-roboto font-medium py-3 lg:py-8">
//           <span className="text-gray-500">Stress-Free</span> Step to Your Dream
//           Home
//         </h1>
//         <div className="grid sm:grid-cols-12 mt-4 lg:mt-10 gap-3 lg:gap-5">
//           {[
//             {
//               number: "01",
//               title: "Dream & Discover",
//               description:
//                 "Envision your perfect home with our guidance and expertise",
//             },
//             {
//               number: "02",
//               title: "Pre-Approval",
//               description:
//                 "Obtain financial pre-approval to streamline your buying process",
//             },
//             {
//               number: "03",
//               title: "Schedule Viewing",
//               description: "Book visits to explore your top property choices",
//             },
//             {
//               number: "04",
//               title: "Offer & Negotiation",
//               description:
//                 "Strategically craft your offer and skillfully negotiate terms",
//             },
//             {
//               number: "05",
//               title: "Secure Your Dream",
//               description: "Carefully review contracts and secure financing",
//             },
//             {
//               number: "06",
//               title: "Welcome Home",
//               description:
//                 "Celebrate your new beginning and settle in comfortably",
//             },
//           ].map((item, index) => (
//             <div
//               className="col-span-6 md:col-span-6 lg:col-span-4 p-5"
//               key={item.number}
//             >
//               <div className="text-[#042651] hover:text-white p-6 lg:p-10 font-roboto text-center border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl hover:bg-gradient-to-r from-[#042651] to-[#076bcd]">
//                 <h5 className="text-2xl lg:text-4xl font-bold mb-2">
//                   {item.number}
//                 </h5>
//                 <h3 className="text-xl lg:text-2xl py-3 font-semibold">
//                   {item.title}
//                 </h3>
//                 <p className="text-center text-sm lg:text-lg">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* What we do?  */}
//       <div className="my-10 max-w-[1280px] mx-auto">
//         <h2 className="font-roboto font-medium text-center text-3xl lg:text-4xl pt-8">
//           What we do?
//         </h2>
//         <div className="grid sm:grid-cols-12">
//           <div className="col-span-12 lg:col-span-6 flex justify-center">
//             <img
//               src={whatwedo}
//               alt=""
//               className="w-[300px] lg:w-[600px] border"
//             />
//           </div>
//           <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
//             <p className="font-poppins text-sm px-8 lg:text-lg lg:leading-9 text-justify text-gray-700">
//               At SkyViewEstates Realtors, we take immense pride in our unwavering
//               commitment to providing personalized real estate solutions
//               tailored specifically to meet the unique needs and preferences of
//               each client. We understand that every individual or family has
//               distinct goals and desires when it comes to finding the perfect
//               property, and we work diligently to ensure that those needs are
//               not only met but exceeded. Our team’s deep market knowledge,
//               combined with a robust network of industry connections, allows us
//               to offer a wide variety of properties that cater to diverse tastes
//               and requirements. Whether you're seeking a luxurious estate, a
//               cozy family home, or a prime commercial space for your business,
//               SkyViewEstates has the expertise and resources to guide you to the
//               ideal property. Our approach goes beyond simply facilitating a
//               transaction; we focus on building long-term relationships and
//               ensuring that each client’s experience is seamless, enjoyable, and
//               rewarding.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Mission  */}
//       <div className="bg-gradient-to-r from-[#0e1d3499] to-[#0e1d34cc] text-white mt-10 mb-10 py-5 px-8">
//         <div className="grid sm:grid-cols-12 flex-col-reverse max-w-[1280px] mx-auto my-8">
//           <div className="col-span-12 lg:col-span-6 flex flex-col justify-start">
//             <h2 className="font-inter font-semibold text-center text-3xl lg:text-left lg:text-4xl mb-4 flex items-center justify-center lg:justify-start">
//               Our Mission
//             </h2>
//             <p className="font-inter font-normal text-sm lg:text-lg lg:leading-9 my-3 text-justify">
//               Our mission is to deliver seamless, rewarding experiences for
//               every client, ensuring that each real estate transaction is not
//               only smooth but also transparent and successful. We believe that
//               buying, selling, or renting a property should be an exciting and
//               stress-free journey, which is why we go above and beyond to make
//               the process as effortless as possible. Trust, integrity, and
//               professionalism are the foundation of our company, and these core
//               values guide everything we do.
//             </p>
//             <p className="font-inter font-normal text-sm lg:text-lg lg:leading-9 my-3 text-justify">
//               We prioritize building meaningful, long-term relationships with
//               our clients, ensuring that their needs are always met with honesty
//               and respect. By maintaining an unwavering commitment to excellence
//               and exceeding expectations at every turn, we aim to foster lasting
//               connections that continue well beyond a single transaction. Our
//               ultimate goal is to be the trusted partner clients can rely on for
//               all their real estate needs, today and in the future.
//             </p>
//           </div>
//           <div className="col-span-12 lg:col-span-6 lg:flex items-center justify-end mt-3">
//             <img
//               src={aboutImg2}
//               alt="About us"
//               className="h-[250px] lg:h-[400px] w-full lg:w-[503px] border-4 border-white shadow-lg transition-transform transform hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

//       <Choose />

//       {/* Meet our directors  */}
//       <div className="bg-[#fff8f6] py-8">
//         <div className="my-5 mx-auto max-w-[1280px]">
//           <h1 className="text-center text-[#03002e] text-3xl lg:text-4xl font-bold pb-10">
//             Get to Know Our Team
//           </h1>

//           <div className="grid sm:grid-cols-12 gap-8 mx-auto">
//             {[
//               {
//                 name: "Ankit Goyal",
//                 role: "Founder",
//                 image: founder,
//                 tagline: "Leading the vision to redefine modern living.",
//               },
//               {
//                 name: "Tushar Gupta",
//                 role: "Co-Founder",
//                 image: coFounder,
//                 tagline: "Driving innovation and excellence in real estate.",
//               },
//             ].map((member, index) => (
//               <div
//                 className="col-span-12 md:col-span-6 lg:col-span-6 p-5"
//                 key={index}
//               >
//                 <div className="director-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                   <div
//                     className={`flex items-center ${
//                       index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                     } gap-8 p-6`}
//                   >
//                     {/* Image Section */}
//                     <div className="relative">
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="rounded-3xl h-[200px] lg:h-[400px] w-[180px] lg:w-[250px] max-w-full object-top object-cover transform hover:scale-105 transition-transform duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 rounded-3xl transition-opacity duration-300"></div>
//                     </div>

//                     {/* Text Section */}
//                     <div className="flex-1">
//                       <h3 className="text-[#03002e] text-lg lg:text-2xl py-3 font-bold font-roboto text-center lg:text-left">
//                         {member.name}
//                       </h3>
//                       <h5 className="text-gray-500 text-center lg:text-left text-sm lg:text-md pb-3 font-roboto">
//                         {member.role}
//                       </h5>
//                       <p className="hidden lg:block text-gray-600 text-center lg:text-left text-sm lg:text-md font-light">
//                         {member.tagline}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div
//         className="bg-latest py-10"
//         style={{
//           background: `linear-gradient(#0e1d3499, #0e1d34cc), url(${bgImage})`,
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="max-w-[1280px] mx-auto">
//           <h1 className="text-center text-3xl lg:text-4xl text-white font-medium">
//             Awards
//           </h1>
//           <div className="grid sm:grid-cols-12 overflow-hidden">
//             <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
//               <AwardComponent />
//             </div>
//             <div className="col-span-12 lg:col-span-6  flex items-center ">
//               <div className="text-white text-lg text-justify px-5">
//                 <p className="text-sm lg:text-lg">
//                   At SkyViewEstates Realtors, we believe that our dedication to
//                   excellence speaks volumes, and it’s a privilege to see this
//                   dedication acknowledged by the real estate community and our
//                   valued clients. Each award we receive is a reflection of the
//                   trust and confidence that clients place in us, motivating us
//                   to continuously raise the bar in service and results.
//                 </p>
//                 <p className="text-sm lg:text-lg mt-3">
//                   These awards are more than just accolades; they are milestones
//                   that reinforce our mission to serve with integrity,
//                   innovation, and unmatched expertise. At SkyViewEstates
//                   Realtors, your trust fuels our ambition, and we remain
//                   steadfast in our journey to redefine excellence in real
//                   estate.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-4">
//             <Link to="/awards">
//               <Button
//                 size="large"
//                 variant="contained"
//                 endIcon={<EastIcon />}
//                 sx={{
//                   backgroundColor: "white",
//                   color: "#03002e",
//                   textTransform: "none",
//                 }}
//               >
//                 View all
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Testimonials />
//     </Layout>
//   );
// };






























import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.css";

import aboutImg from "../../assets/img/aboutImg.png";
import aboutImg2 from "../../assets/img/aboutImg2.png";
import { Choose } from "../../components/Choose";
import { Testimonials } from "../../components/Testimonials";

import founder from "../../assets/img/ankitgoyal.jpeg";
import coFounder from "../../assets/img/tushargupta.jpg";
import whatwedo from "../../assets/img/17.png";
import { NavigationBar } from "../../components/NavigationBar";
import { AwardComponent } from "../../components/AwardComponent";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

import bgImage from "../../assets/img/img4.jpg";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Layout>
      {/* About Hero */}
      <div className="aboutbanner flex items-center justify-center bg-gradient-to-r from-sky-800 to-blue-900 py-16 md:py-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-10 lg:mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-dmsans text-center font-bold text-white text-4xl lg:text-5xl drop-shadow-lg"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </div>

      <NavigationBar />

      {/* welcome to SkyViewEstates */}
      <div className="my-12 mx-auto max-w-[1280px] px-4">
        <h1 
          data-aos="fade-up"
          className="font-roboto text-2xl lg:text-4xl text-center font-bold lg:mt-16"
        >
          <span className="text-sky-500">Welcome To </span>
          <span className="text-blue-900">SkyViewEstates</span>
        </h1>

        <div className="grid sm:grid-cols-12 my-10">
          <div 
            data-aos="fade-right"
            className="col-span-12 lg:col-span-6 flex flex-col mt-3 lg:mt-6 items-start gap-5"
          >
            <p className="font-poppins text-sm lg:text-lg lg:leading-8 text-justify text-gray-700 px-4 lg:px-8">
              SkyViewEstates is a premier real estate agency known for exceptional service and remarkable results. With decades of combined experience in the luxury property market, our team brings unparalleled expertise to every transaction. We pride ourselves on our personalized approach, working closely with each client to understand their unique vision and requirements for their dream property.
            </p>
            <p className="font-poppins text-sm lg:text-lg lg:leading-8 text-justify text-gray-700 px-4 lg:px-8">
              Our commitment to excellence extends beyond just closing deals. We create meaningful relationships with our clients, offering continued support and guidance throughout the entire home buying or selling journey. At SkyViewEstates, we combine traditional values with innovative approaches to deliver results that consistently exceed expectations.
            </p>
            <p className="font-poppins text-sm lg:text-lg lg:leading-8 text-justify text-gray-700 px-4 lg:px-8">
              What truly sets SkyViewEstates apart is our deep understanding of local markets and emerging trends. This insight allows us to provide strategic advice that helps our clients make informed decisions, whether they're first-time buyers or seasoned investors looking to expand their portfolio.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-center justify-center mt-8 lg:mt-0 lg:justify-end">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={aboutImg}
              alt="about-welcome-image"
              className="h-[280px] lg:h-[400px] w-[480px] mx-5 rounded-lg shadow-xl object-cover"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>

      <div className="my-16 max-w-[1280px] mx-auto px-4">
        <h1 
          data-aos="fade-up"
          className="text-center text-2xl lg:text-4xl font-roboto font-bold py-3 lg:py-8"
        >
          <span className="text-sky-500">Stress-Free</span> Path to Your Dream Home
        </h1>
        <div className="grid sm:grid-cols-12 mt-8 lg:mt-12 gap-5 lg:gap-6">
          {[
            {
              number: "01",
              title: "Discover & Dream",
              description:
                "Explore possibilities with our expert guidance and market insights",
            },
            {
              number: "02",
              title: "Financial Approval",
              description:
                "Secure pre-approval to strengthen your position in the market",
            },
            {
              number: "03",
              title: "Property Tours",
              description: "Experience your potential new home through personalized viewings",
            },
            {
              number: "04",
              title: "Strategic Negotiation",
              description:
                "Leverage our expertise to secure the best possible terms",
            },
            {
              number: "05",
              title: "Seamless Closing",
              description: "Navigate paperwork and financing with expert assistance",
            },
            {
              number: "06",
              title: "New Beginnings",
              description:
                "Start your new chapter with comprehensive support and resources",
            },
          ].map((item, index) => (
            <div
              className="col-span-6 md:col-span-6 lg:col-span-4 p-3"
              key={item.number}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-[#042651] hover:text-white p-6 lg:p-8 font-roboto text-center border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl hover:bg-gradient-to-r from-sky-800 to-blue-700 h-full">
                <h5 className="text-2xl lg:text-4xl font-bold mb-3">
                  {item.number}
                </h5>
                <h3 className="text-xl lg:text-2xl py-3 font-bold">
                  {item.title}
                </h3>
                <p className="text-center text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* What we do? */}
      <div className="my-16 max-w-[1280px] mx-auto px-4">
        <h2 
          data-aos="fade-up"
          className="font-roboto font-bold text-center text-3xl lg:text-4xl pt-8 text-blue-900"
        >
          What We Do
        </h2>
        <div className="grid sm:grid-cols-12 gap-8 mt-10">
          <div 
            className="col-span-12 lg:col-span-6 flex justify-center"
            data-aos="fade-right"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={whatwedo}
              alt="SkyViewEstates services"
              className="w-[300px] lg:w-[600px] border rounded-xl shadow-lg"
            />
          </div>
          <div 
            className="col-span-12 lg:col-span-6 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <p className="font-poppins text-sm px-4 lg:px-8 lg:text-lg lg:leading-8 text-justify text-gray-700">
              At SkyViewEstates, we take immense pride in delivering bespoke real estate solutions that perfectly align with each client's unique vision and requirements. We understand that every property journey is distinct, which is why we invest time in truly understanding your specific needs before recommending any property options.
              <br /><br />
              Our comprehensive approach combines market expertise with an extensive network of industry connections, enabling us to present a diverse portfolio of properties ranging from luxurious penthouses to charming family homes and strategic commercial investments. What sets SkyViewEstates apart is our commitment to providing a seamless experience that goes beyond the transaction itself.
              <br /><br />
              We build lasting relationships founded on trust and exceptional service, ensuring that every step of your property journey is not only successful but also enjoyable. Our team's dedication to excellence means you can count on us to be your trusted advisors in all real estate matters, now and in the future.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission */}
      <div className="bg-gradient-to-r from-sky-900 to-blue-800 text-white py-16 px-4 my-16">
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
          <div 
            className="col-span-12 lg:col-span-6 flex flex-col justify-start"
            data-aos="fade-right"
          >
            <h2 className="font-inter font-bold text-center text-3xl lg:text-left lg:text-4xl mb-6 flex items-center justify-center lg:justify-start">
              Our Mission
            </h2>
            <p className="font-inter font-normal text-sm lg:text-lg lg:leading-8 my-3 text-justify">
              Our mission at SkyViewEstates is to transform the real estate experience into a journey of discovery and satisfaction. We are dedicated to providing transparent, personalized service that results in successful outcomes for every client. We believe that finding or selling a property should be exciting rather than stressful, which is why we've developed a streamlined approach backed by integrity and expertise.
            </p>
            <p className="font-inter font-normal text-sm lg:text-lg lg:leading-8 my-3 text-justify">
              Building meaningful relationships is at the core of everything we do. We listen attentively to understand your unique needs and preferences, ensuring that every recommendation we make aligns perfectly with your vision. Our commitment extends far beyond closing day - we aim to be your trusted real estate partner for life, providing continued support and expertise whenever you need it. At SkyViewEstates, your dream property isn't just a transaction; it's the beginning of a new chapter that we're honored to help you write.
            </p>
          </div>
          <div 
            className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            data-aos="fade-left"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={aboutImg2}
              alt="Our Mission"
              className="h-[280px] lg:h-[400px] w-full lg:w-[503px] border-4 border-white rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <Choose />

      {/* Meet our directors */}
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-16">
        <div className="my-5 mx-auto max-w-[1280px] px-4">
          <h1
            data-aos="fade-up" 
            className="text-center text-blue-900 text-3xl lg:text-4xl font-bold pb-12"
          >
            Meet Our Leadership Team
          </h1>

          <div className="grid sm:grid-cols-12 gap-8 mx-auto">
            {[
              {
                name: "Alexander Bennett",
                role: "Founder & CEO",
                image: founder,
                tagline: "Pioneering innovative approaches to luxury real estate.",
              },
              {
                name: "Olivia Richardson",
                role: "Co-Founder & COO",
                image: coFounder,
                tagline: "Transforming property experiences with strategic vision.",
              },
            ].map((member, index) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-6 p-5"
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="director-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } gap-8 p-6`}
                  >
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-3xl">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={member.image}
                        alt={member.name}
                        className="rounded-3xl h-[200px] lg:h-[400px] w-[180px] lg:w-[250px] max-w-full object-top object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 rounded-3xl transition-opacity duration-300"></div>
                    </div>

                    {/* Text Section */}
                    <div className="flex-1">
                      <h3 className="text-blue-900 text-lg lg:text-2xl py-3 font-bold font-roboto text-center lg:text-left">
                        {member.name}
                      </h3>
                      <h5 className="text-sky-600 text-center lg:text-left text-sm lg:text-md pb-3 font-roboto font-medium">
                        {member.role}
                      </h5>
                      <p className="hidden lg:block text-gray-600 text-center lg:text-left text-sm lg:text-md font-light">
                        {member.tagline}
                      </p>
                      <div className="hidden lg:flex mt-4 space-x-3 justify-center lg:justify-start">
                        {["LinkedIn", "Twitter", "Email"].map((platform) => (
                          <span key={platform} className="px-3 py-1 text-xs font-medium text-sky-700 bg-sky-100 rounded-full cursor-pointer hover:bg-sky-200 transition-colors">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-latest py-16"
        style={{
          background: `linear-gradient(rgba(7, 89, 133, 0.85), rgba(15, 23, 42, 0.9)), url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        data-aos="fade-up"
      >
        <div className="max-w-[1280px] mx-auto px-4">
          <h1 className="text-center text-3xl lg:text-4xl text-white font-bold mb-10">
            Awards & Recognition
          </h1>
          <div className="grid sm:grid-cols-12 overflow-hidden gap-8">
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start" data-aos="fade-right">
              <AwardComponent />
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center" data-aos="fade-left">
              <div className="text-white text-lg text-justify px-5">
                <p className="text-sm lg:text-lg">
                  At SkyViewEstates, our pursuit of excellence has been recognized across the industry, reflecting our unwavering commitment to providing extraordinary service and results. Each award we receive validates our client-first approach and inspires us to continue raising the standard in luxury real estate services.
                </p>
                <p className="text-sm lg:text-lg mt-5">
                  These accolades represent more than professional recognition—they're a testament to the trust our clients place in us and the relationships we've built over the years. We're proud of our achievements, but even more proud of the countless families and individuals we've helped find their perfect property. At SkyViewEstates, we measure our success not just in awards, but in the satisfaction of our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/awards">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<EastIcon />}
                  sx={{
                    backgroundColor: "white",
                    color: "#075985",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "#f8fafc",
                    }
                  }}
                >
                  View All Awards
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <Testimonials />
    </Layout>
  );
};