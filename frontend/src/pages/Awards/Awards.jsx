// import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import { Layout } from "../../components/Layout";
// import { NavigationBar } from "../../components/NavigationBar";
// import { useFetchData } from "../../hooks/useFetchData";
// import "./Awards.css";
// import { CircularProgress } from "@mui/material";

// export const Awards = () => {
//   const apiUrl = `${process.env.BASE_URL}/api/v1/awards`;
//   const { data, loading, error, refetch } = useFetchData(apiUrl);
//   const awards = data?.awards || [];
//   return (
//     <>
//       <ToastContainer />
//       <Layout>
//         <div className="awardsbanner flex items-center justify-center">
//           <div className="grid sm:grid-cols-12">
//             <div className="col-span-12 text-center lg:mt-20 flex justify-center items-center">
//               <h1 className="font-dmsans text-3xl lg:text-4xl font-medium text-white">
//                 Awards
//               </h1>
//             </div>
//           </div>
//         </div>

//         <NavigationBar />

//         <div className="my-10">
//           <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-center py-3 lg:py-8">
//             Awards
//           </h1>

//           <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
//             {loading && (
//               <div className="col-span-12 flex justify-center">
//                 <CircularProgress size="30px" />
//               </div>
//             )}
//             {error && (
//               <div className="col-span-12 flex justify-center">
//                 <p>Something went wrong while loading the awards.</p>
//               </div>
//             )}
//             {awards?.map((award, i) => {
//               return (
//                 <div key={award._id} className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
//                   <img src={`${process.env.BASE_URL}/${award.image}`} alt="" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };












import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Layout } from "../../components/Layout";
import { NavigationBar } from "../../components/NavigationBar";
import { useFetchData } from "../../hooks/useFetchData";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export const Awards = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/awards`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const awards = data?.awards || [];

  useEffect(() => {
    if (error) {
      toast.error("Failed to load awards. Please try again later.");
    }
  }, [error]);

  return (
    <>
      <ToastContainer />
      <Layout>
        {/* Hero Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-64 md:h-80 lg:h-96 w-full bg-gradient-to-r from-emerald-800 to-teal-600 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-[url('/img/luxury-home.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="z-10 grid sm:grid-cols-12 w-full max-w-6xl px-4"
          >
            <div className="col-span-12 text-center lg:mt-8 flex flex-col justify-center items-center">
              <h1 className="font-dmsans text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Accolades
              </h1>
              <div className="h-1 w-20 bg-amber-400 rounded-full mb-4"></div>
              <p className="text-white text-lg max-w-2xl">
                Recognition for our commitment to excellence in real estate
              </p>
            </div>
          </motion.div>
        </motion.div>

        <NavigationBar />

        <div className="my-10 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="font-roboto text-3xl lg:text-4xl font-bold text-emerald-800 py-3 lg:py-6">
              Industry Recognition
            </h1>
            <div className="h-1 w-20 bg-amber-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              At Emerald Vista Properties, we take pride in our commitment to excellence.
              These awards showcase our dedication to providing exceptional real estate services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-12 gap-6 max-w-[1280px] mx-auto">
            {loading && (
              <div className="col-span-12 flex justify-center py-20">
                <CircularProgress size="40px" style={{ color: '#047857' }} />
              </div>
            )}
            
            {error && (
              <div className="col-span-12 flex justify-center py-10">
                <p className="text-red-500 bg-red-50 px-4 py-3 rounded-lg">
                  Something went wrong while loading the awards. Please try again later.
                </p>
              </div>
            )}
            
            {awards?.map((award, i) => {
              return (
                <motion.div 
                  key={award._id} 
                  className="col-span-12 md:col-span-6 lg:col-span-4 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
                    <div className="relative pb-2/3 overflow-hidden">
                      <img 
                        src={`${process.env.BASE_URL}/${award.image}`} 
                        alt={award.title || "Award"} 
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg text-emerald-800">{award.title || "Achievement Award"}</h3>
                      <p className="text-gray-600 text-sm mt-1">{award.year || "Recent Recognition"}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {!loading && !error && awards.length === 0 && (
              <div className="col-span-12 flex justify-center py-10">
                <p className="text-gray-500">No awards to display at the moment.</p>
              </div>
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16 mb-8"
          >
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors shadow-md hover:shadow-lg"
            >
              <span>Contact Us Today</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Layout>
    </>
  );
};