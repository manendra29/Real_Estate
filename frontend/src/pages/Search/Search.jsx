// import React from "react";
// import { Layout } from "../../components/Layout";
// import "./Search.css";
// import { PropertyCard } from "../../components/PropertyCard";
// import { useParams } from "react-router-dom";
// import { useFetchData } from "../../hooks/useFetchData";
// import { CircularProgress } from "@mui/material";

// export const Search = () => {
//   const { id } = useParams();
//   const apiUrl = `${process.env.BASE_URL}/api/v1/property/search?query=${id}`;

//   const { data, loading, error, refetch } = useFetchData(apiUrl);

//   const properties = data?.properties;

//   return (
//     <Layout>
//       {/* Search Hero */}
//       <div className="searchbanner flex items-center justify-center">
//         <div className="grid sm:grid-cols-12">
//           <div className="col-span-12 text-center mt-10 lg:mt-20 flex justify-center items-center">
//             <h1 className="font-dmsans text-3xl lg:text-4xl font-medium text-white">
//               Search Properties
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="flex my-8 justify-center">
//         <h3 className="text-3xl">
//           {properties && properties.length > 0 ? (
//             <>
//               Search results for{" "}
//               <span className="font-bold capitalize">{id}</span>
//             </>
//           ) : (
//             <div className="flex flex-col justify-around items-center text-center space-y-4 h-[30vh]">
//               <h4 className="text-2xl font-medium text-gray-600">
//                 No results found for{" "}
//                 <span className="font-bold capitalize">{id}</span>
//               </h4>
//               <p className="text-lg text-center text-gray-500">
//                 We couldn't find any properties that match your search. Try
//                 using different keywords or filters.
//               </p>
//             </div>
//           )}
//         </h3>
//       </div>

//       <div className="grid sm:grid-cols-12 mx-16">
//         {loading && (
//           <div className="col-span-12 flex items-center justify-center">
//             <CircularProgress size="30px" />
//           </div>
//         )}
//         {properties &&
//           properties.length > 0 &&
//           properties.map((property) => {
//             return (
//               <div
//                 className="col-span-3 flex justify-center m-3"
//                 key={property._id}
//               >
//                 <PropertyCard
//                   id={property._id}
//                   name={property.name}
//                   image={property.image[0]}
//                   location={property.location}
//                   builder={property.builder}
//                   unit={property.unit}
//                   size={property.size}
//                   price={property.price}
//                 />
//               </div>
//             );
//           })}
//       </div>
//     </Layout>
//   );
// };


















import React from "react";
import { Layout } from "../../components/Layout";
import { PropertyCard } from "../../components/PropertyCard";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { CircularProgress } from "@mui/material";

export const Search = () => {
  const { id } = useParams();
  const apiUrl = `${process.env.BASE_URL}/api/v1/property/search?query=${id}`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const properties = data?.properties;
  
  // Image URL
  const backgroundImage = "https://media.istockphoto.com/id/2155879454/photo/this-is-an-exterior-photo-of-a-home-for-sale-in-beverly-hills-ca.jpg?s=612x612&w=0&k=20&c=uSKacMQvmaYX5Pf5Br7pUfErYQbNt_UWXRTjfwrdSDQ=";

  return (
    <Layout>
      {/* Modern Hero Section with Overlay */}
      <div 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Searching for: <span className="font-bold capitalize">{id}</span>
          </p>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <CircularProgress size="40px" />
          </div>
        ) : properties && properties.length > 0 ? (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Search Results for <span className="text-indigo-600 capitalize">{id}</span>
              </h2>
              <p className="text-gray-600 mt-2">
                We found {properties.length} properties matching your search
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <div key={property._id} className="transform transition duration-300 hover:scale-105">
                  <PropertyCard
                    id={property._id}
                    name={property.name}
                    image={property.image[0] || backgroundImage} // Use the provided image as fallback
                    location={property.location}
                    builder={property.builder}
                    unit={property.unit}
                    size={property.size}
                    price={property.price}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
              <img 
                src={backgroundImage} 
                alt="No results" 
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-indigo-100"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                No Results Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any properties matching "<span className="font-medium capitalize">{id}</span>".
                Try using different keywords or filters.
              </p>
              <button 
                onClick={() => window.history.back()} 
                className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};