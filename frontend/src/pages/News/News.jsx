// import React from "react";
// import { Layout } from "../../components/Layout";
// import "./News.css";

// import { NewsCard } from "../../components/NewsCard";
// import { useFetchData } from "../../hooks/useFetchData";
// import { Link } from "react-router-dom";
// import { NavigationBar } from "../../components/NavigationBar";
// import { CircularProgress } from "@mui/material";

// export const News = () => {
//   const apiUrl = `${process.env.BASE_URL}/api/v1/news`;

//   const { data, loading, error, refetch } = useFetchData(apiUrl);

//   const news =
//     data && data.news
//       ? data.news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//       : [];

//   return (
//     <Layout>
//       {/* News Hero  */}
//       <div className="newsbanner flex items-center justify-center">
//         <div className="grid sm:grid-cols-12">
//           <div className="col-span-12 text-center mt-10 lg:mt-20">
//             <h1 className="font-dmsans font-medium text-white text-3xl lg:text-4xl ">
//               News
//             </h1>
//           </div>
//         </div>
//       </div>

//       <NavigationBar />

//       {/* Latest News  */}
//       <div className="my-5">
//         <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-center  py-3 lg:py-8">
//           Latest News
//         </h1>

//         <div className="grid sm:grid-cols-12 my-3 lg:my-5 max-w-[1280px] mx-auto">
//           {loading && (
//             <div className="col-span-12 flex justify-center">
//               <CircularProgress size="30px" />
//             </div>
//           )}
//           {error && <p>{error}</p>}
//           {news?.map((item) => {
//             return (
//               <div
//                 key={item._id}
//                 className="col-span-12 md:col-span-6 lg:col-span-3 m-3"
//               >
//                 <a href={item.url} target="_blank">
//                   <NewsCard item={item} />
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Layout>
//   );
// };
















import React from "react";
import { Layout } from "../../components/Layout";
import { NewsCard } from "../../components/NewsCard";
import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

export const News = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/news`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const news =
    data && data.news
      ? data.news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : [];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      {/* News Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-sky-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="font-dmsans font-medium text-white text-4xl lg:text-5xl mb-4 drop-shadow-lg">
              SkyViewEstates News
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Stay updated with the latest property insights and market trends
            </p>
          </motion.div>
        </div>
      </div>

      <NavigationBar />

      {/* Latest News Section */}
      <div className="py-10 px-4 md:py-16 bg-gray-50">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-roboto text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-2"
        >
          Latest News
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-sky-500 mx-auto mb-10"
        />

        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex justify-center py-20">
              <CircularProgress size="40px" style={{ color: "#0284c7" }} />
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-500 py-10">
              <p className="text-lg">{error}</p>
              <button 
                onClick={() => refetch()} 
                className="mt-4 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          )}
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {news?.map((item) => (
              <motion.div
                key={item._id}
                variants={itemVariants}
                className="transform transition-transform duration-300 hover:-translate-y-2"
              >
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <NewsCard item={item} />
                </a>
              </motion.div>
            ))}
          </motion.div>
          
          {news?.length === 0 && !loading && !error && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">No news articles available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
