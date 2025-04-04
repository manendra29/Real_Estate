import React, { useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { Layout } from "../../components/Layout";
import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";
import DownloadIcon from "@mui/icons-material/Download";
import "./Brochure.css";
import { EnquiryForm } from "../../components/EnquiryForm";

export const Brochure = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/brochures/`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const brochures = data.brochure;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      {/* Hero  */}
      <div className="brochurebanner flex flex-col items-cemter justify-center ">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-10 lg:mt-20 flex justify-center items-center">
            <h1 className="font-dmsans font-medium text-white text-3xl lg:text-5xl ">
              Brochure
            </h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-roboto text-3xl lg:text-4xl font-medium py-8 text-center">
          Brochures
        </h1>

        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button
                onClick={handleOpen}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4"
              >
                <DownloadIcon className="mr-2 w-6 h-6" />
                Download
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Ace Starlit`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery2}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button
                onClick={handleOpen}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4"
              >
                <DownloadIcon className="mr-2 w-6 h-6" />
                Download
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Tata Eureka`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery3}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button
                onClick={handleOpen}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4"
              >
                <DownloadIcon className="mr-2 w-6 h-6" />
                Download
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Ace Hanei`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px]  w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button
                onClick={handleOpen}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4"
              >
                <DownloadIcon className="mr-2 w-6 h-6" />
                Download
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`ATS Pristine`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button
                onClick={handleOpen}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4"
              >
                <DownloadIcon className="mr-2 w-6 h-6" />
                Download
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Prestige`}</h4>
            </div>
          </div>
          <div className="col-span-12">
            <EnquiryForm handleClose={handleClose} open={open} />
          </div>
        </div>
      </div>
    </Layout>
  );
};






// import React, { useState, useEffect } from "react";
// import { useFetchData } from "../../hooks/useFetchData";
// import { Layout } from "../../components/Layout";
// import gallery1 from "../../assets/img/gallery1.png";
// import gallery2 from "../../assets/img/gallery2.png";
// import gallery3 from "../../assets/img/gallery3.png";
// import DownloadIcon from "@mui/icons-material/Download";
// import { motion } from "framer-motion";
// import "./Brochure.css";
// import { EnquiryForm } from "../../components/EnquiryForm";

// export const Brochure = () => {
//   const apiUrl = `${process.env.BASE_URL}/api/v1/brochures/`;

//   const { data, loading, error, refetch } = useFetchData(apiUrl);
//   const brochures = data.brochure;
//   const [open, setOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//   };

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardAnimation = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.5 }
//     },
//     hover: {
//       scale: 1.03,
//       boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const properties = [
//     { id: 1, name: "SkyView Starlit", image: gallery1 },
//     { id: 2, name: "SkyView Eureka", image: gallery2 },
//     { id: 3, name: "SkyView Hanei", image: gallery3 },
//     { id: 4, name: "SkyView Pristine", image: gallery1 },
//     { id: 5, name: "SkyView Prestige", image: gallery1 },
//   ];

//   return (
//     <Layout>
//       {/* Hero Banner with Gradient Overlay */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-600 h-64 md:h-80">
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        
//         {/* Abstract shapes in background */}
//         <div className="absolute w-64 h-64 rounded-full bg-blue-500 bg-opacity-20 -top-20 -left-20 blur-xl"></div>
//         <div className="absolute w-96 h-96 rounded-full bg-indigo-500 bg-opacity-10 -bottom-40 -right-20 blur-xl"></div>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 grid sm:grid-cols-12 h-full"
//         >
//           <div className="col-span-12 flex flex-col justify-center items-center h-full text-center px-4">
//             <h1 className="font-dmsans font-bold text-white text-4xl lg:text-6xl tracking-tight mb-2">
//               Brochure Collection
//             </h1>
//             <p className="text-blue-100 text-lg max-w-xl">
//               Explore our exclusive property portfolio with detailed brochures
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="py-12 bg-gradient-to-b from-white to-blue-50">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="container px-4 mx-auto"
//         >
//           <h1 className="font-roboto text-3xl lg:text-5xl font-bold mb-4 text-center text-blue-900">
//             <span className="relative">
//               SkyViewEstates
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
//             </span>
//             <span className="text-blue-700"> Brochures</span>
//           </h1>
//           <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//             Download detailed information about our premium properties and discover your perfect home
//           </p>

//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1440px] mx-auto"
//           >
//             {properties.map((property) => (
//               <motion.div
//                 key={property.id}
//                 variants={cardAnimation}
//                 whileHover="hover"
//                 className="col-span-1 px-2"
//               >
//                 <div className="relative overflow-hidden group border-0 rounded-xl flex flex-col items-center shadow-md bg-white hover:shadow-xl transition-all duration-300">
//                   {/* Overlay background with gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* Image */}
//                   <div className="h-[300px] w-full overflow-hidden rounded-t-xl">
//                     <img
//                       src={property.image}
//                       alt="Property Brochure"
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   </div>

//                   {/* Hover content: Download button */}
//                   <button
//                     onClick={handleOpen}
//                     className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90"
//                   >
//                     <div className="bg-white bg-opacity-90 backdrop-blur-sm py-3 px-6 rounded-full flex items-center shadow-lg hover:bg-opacity-100 transition-all duration-300">
//                       <DownloadIcon className="mr-2 w-5 h-5 text-blue-600" />
//                       <span className="text-blue-900 font-medium">Download Brochure</span>
//                     </div>
//                   </button>

//                   {/* Title with refined design */}
//                   <div className="w-full px-4 py-5 flex flex-col items-center bg-gradient-to-r from-blue-50 to-white border-t border-blue-100">
//                     <h4 className="text-center text-xl font-roboto font-semibold text-blue-900 mb-1">{property.name}</h4>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
//                       <span>Premium Collection</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
          
//           <div className="col-span-12 mt-12">
//             <EnquiryForm handleClose={handleClose} open={open} />
//           </div>
//         </motion.div>
//       </div>
//     </Layout>
//   );
// };