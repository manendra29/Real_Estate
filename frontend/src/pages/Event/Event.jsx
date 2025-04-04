// import React from "react";
// import "./Event.css";
// import { Layout } from "../../components/Layout";
// import { NavigationBar } from "../../components/NavigationBar";
// import { Link } from "react-router-dom";
// import { useFetchData } from "../../hooks/useFetchData";
// import { CircularProgress } from "@mui/material";

// export const Event = () => {
//   const apiUrl = `${process.env.BASE_URL}/api/v1/events`;
//   const { data, loading, error, refetch } = useFetchData(apiUrl);
//   const events = data.events;

//   return (
//     <Layout>
//       <div className="eventbanner flex justify-center items-center">
//         <div className="grid sm:grid-cols-12">
//           <div className="col-span-12 text-center mt-10 lg:mt-20">
//             <h1 className="font-dmsans font-medium text-white text-3xl lg:text-4xl capitalize">
//               Events
//             </h1>
//           </div>
//         </div>
//       </div>

//       <NavigationBar />

//       <div className="my-10">
//         <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-center py-3 lg:py-8">
//           Events
//         </h1>
//         <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto mt-3 lg:mt-8">
//           {loading && (
//             <div className="col-span-12 flex justify-center">
//               <CircularProgress size="30px" />
//             </div>
//           )}
//           {
//             error && (
//               <div className="col-span-12 flex justify-center">
//                 <p>Error: {error}</p>
//               </div>
//             )
//           }
//           {events &&
//             events.map((event) => {
//               const imageUrl =
//                 `${process.env.BASE_URL}/${event.image[0]}`.replace(/\\/g, "/");
//               return (
//                 <div
//                   className="col-span-12 md:col-span-6 lg:col-span-4 m-5"
//                   key={event._id}
//                 >
//                   <div
//                     className="card bg-cover bg-center"
//                     style={{
//                       backgroundImage: `url(${imageUrl})`,
//                     }}
//                   >
//                     <div className="content">
//                       <h2 className="title">{event.title}</h2>
//                       <p className="copy">{event.description}</p>
//                       <p className="copy-1 text-lg">
//                         Posted On:{" "}
//                         {new Date(event.createdAt).toLocaleDateString()}
//                       </p>
//                       <Link to={`/event/${event._id}`}>
//                         <button className="btn">View Trips</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </Layout>
//   );
// };








import React, { useEffect } from "react";
import "./Event.css";
import { Layout } from "../../components/Layout";
import { NavigationBar } from "../../components/NavigationBar";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

export const Event = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/events`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const events = data.events;

  useEffect(() => {
    // Add a smooth scroll effect when page loads
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      {/* Hero Banner with Gradient Overlay */}
      <div className="eventbanner relative flex justify-center items-center h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-900">
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-2 w-2 rounded-full bg-white top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute h-3 w-3 rounded-full bg-white top-1/2 left-3/4 animate-ping"></div>
          <div className="absolute h-2 w-2 rounded-full bg-white top-3/4 left-1/3 animate-pulse"></div>
          <div className="absolute h-4 w-4 rounded-full bg-white top-1/3 left-2/3 animate-ping"></div>
        </div>
        
        {/* Banner content */}
        <motion.div 
          className="grid sm:grid-cols-12 w-full max-w-7xl px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="col-span-12 text-center">
            <motion.h1 
              className="font-dmsans font-bold text-white text-4xl lg:text-5xl capitalize tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              SkyViewEstates Events
            </motion.h1>
            <motion.p
              className="text-blue-100 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover exclusive property showcases and investment opportunities
            </motion.p>
          </div>
        </motion.div>
      </div>

      <NavigationBar />

      {/* Events Section */}
      <div className="my-16 px-4">
        <motion.h1 
          className="font-roboto text-3xl lg:text-4xl font-bold text-center py-3 lg:py-8 text-gray-800 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative">
            Upcoming Property Events
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform -translate-y-2"></span>
          </span>
        </motion.h1>
        
        <motion.div 
          className="grid sm:grid-cols-12 max-w-[1280px] mx-auto mt-8 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {loading && (
            <div className="col-span-12 flex justify-center py-20">
              <CircularProgress size="40px" style={{ color: '#3b82f6' }} />
            </div>
          )}
          
          {error && (
            <div className="col-span-12 flex justify-center py-12">
              <p className="text-red-500 bg-red-50 px-6 py-4 rounded-lg shadow">Error: {error}</p>
            </div>
          )}
          
          {events &&
            events.map((event) => {
              const imageUrl = `${process.env.BASE_URL}/${event.image[0]}`.replace(/\\/g, "/");
              return (
                <motion.div
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                  key={event._id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div
                    className="card bg-cover bg-center h-96 rounded-xl overflow-hidden shadow-lg relative group"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <div className="content absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <h2 className="title text-white text-2xl font-bold mb-2">{event.title}</h2>
                        <p className="copy text-gray-200 line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{event.description}</p>
                        <p className="copy-1 text-blue-300 text-sm mb-4">
                          <span className="bg-blue-900 bg-opacity-50 px-3 py-1 rounded-full">
                            {new Date(event.createdAt).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </p>
                        <Link to={`/event/${event._id}`}>
                          <button className="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-md">
                            View Properties
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
        
        {/* No events message */}
        {events && events.length === 0 && !loading && !error && (
          <motion.div 
            className="col-span-12 text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No upcoming events at this time. Please check back later.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};