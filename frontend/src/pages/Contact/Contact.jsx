// import React, { useState } from "react";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import { Layout } from "../../components/Layout";

// import contactImg from "../../assets/img/aboutImg2.png";

// import "react-toastify/dist/ReactToastify.css";
// import "./Contact.css";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import { Button } from "@mui/material";

// export const Contact = () => {
//   const apiUrl = `${process.env.BASE_URL}/api/v1/contact`;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false); // To manage loading state

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value, // dynamically update the state
//     });
//   };

//   // Validate form data
//   const validateForm = () => {
//     const { name, email, phone, message } = formData;

//     if (!name || !phone) {
//       toast.error("Please fill in all fields.");
//       return false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) {
//       toast.error("Please enter a valid phone number.");
//       return false;
//     }

//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     if (!validateForm()) {
//       return; // If validation fails, don't submit
//     }

//     setLoading(true); // Set loading state to true when submitting

//     try {
//       // Post formData to the backend API
//       const response = await axios.post(apiUrl, formData);

//       if (response.data.success) {
//         toast.success(response.data.success.message); // Show success toast
//         // Optionally, clear the form after submission
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//       } else {
//         toast.error("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Error submitting form. Please try again.");
//     } finally {
//       toast.success("Message sent successfully!")
//       setLoading(false); // Set loading state back to false after submission
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-center" />
//       <Layout>
//         {/* Contact Hero  */}
//         <div className="contactbanner flex items-center justify-center">
//           <div className="grid sm:grid-cols-12">
//             <div className="col-span-12 text-center mt-10 lg:mt-20 flex justify-center items-center">
//               <h1 className="font-dmsans text-3xl lg:text-4xl font-medium text-white">
//                 Contact Us
//               </h1>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-200">
//           <div className="max-w-[1280px] mx-auto">
//             <div className="grid sm:grid-cols-12 py-10">
//               <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-3 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
//                 <div className="flex flex-col gap-3 lg:gap-5 justify-center items-center">
//                   <div className="flex items-center justify-center p-5 bg-[#15247a] rounded-[50%] h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]">
//                     <EmailIcon
//                       sx={{
//                         fontSize: { sm: "20px", lg: "40px" },
//                         color: "white",
//                       }}
//                     />
//                   </div>

//                   <p className="font-dmsans font-semibold text-lg">
//                     Chat to us
//                   </p>
//                   <p className="font-roboto text-lg text-[#0529ff]">
//                     Our friendly team is here to help.
//                   </p>
//                   <p className="font-roboto text-md text-center">
//                     growinfinityrealtor1@gmail.com, info@growinfinityrealtors.in
//                   </p>
//                 </div>
//               </div>
//               <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-3 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
//                 <div className="flex flex-col gap-3 lg:gap-5  justify-center items-center">
//                   <div className="flex items-center justify-center p-5 bg-[#15247a] rounded-[50%] h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]">
//                     <LocationOnIcon
//                       sx={{
//                         fontSize: { sm: "20px", lg: "40px" },
//                         color: "white",
//                       }}
//                     />
//                   </div>

//                   <p className="font-dmsans font-semibold text-lg">Office</p>
//                   <p className="font-roboto text-lg text-[#0529ff]">
//                     Come say hello at our office HQ.
//                   </p>
//                   <p className="font-roboto text-md text-center">
//                     Plot No. BL-34, II Floor, Near Fitness Gym, Sector-116,
//                     Noida, Uttar Pradesh-201305
//                   </p>
//                 </div>
//               </div>
//               <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-2 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
//                 <div className="flex flex-col gap-3 lg:gap-5  justify-center items-center">
//                   <div className="flex items-center justify-center p-3 lg:p-5 bg-[#15247a] rounded-[50%] h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]">
//                     <LocalPhoneIcon
//                       sx={{
//                         fontSize: { sm: "20px", lg: "40px" },
//                         color: "white",
//                       }}
//                     />
//                   </div>

//                   <p className="font-dmsans font-semibold text-lg">Phone</p>
//                   <p className="font-roboto text-lg text-[#0529ff]">
//                     Mon-Sun from 8am to 6pm
//                   </p>
//                   <p className="font-roboto text-md">+91-9990052554</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-[1280px] mx-auto">
//           <div className="grid sm:grid-cols-12 my-5 lg:my-10">
//             <div className="col-span-12 lg:col-span-6 p-3 m-5">
//               <h1 className="text-2xl lg:text-4xl font-medium font-roboto text-center">
//                 Let's Get In Touch
//               </h1>
//               <p className="text-center text-lg font-roboto py-3">
//                 Or just reach manually to{" "}
//                 <span className="text-[#0529ff]">
//                   <a href="mailto:info@growinfinityrealtors.in">
//                     info@growinfinityrealtors.in
//                   </a>
//                 </span>
//               </p>

//               <form className="mt-5">
//                 <div className="grid sm:grid-cols-12 font-roboto gap-5">
//                   <div className="col-span-12">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="name" className="ps-2">
//                         Full Name
//                       </label>
//                       <div className="flex items-center border rounded-[24px]">
//                         <PersonOutlineOutlinedIcon
//                           sx={{ marginLeft: "15px" }}
//                         />
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           placeholder="Enter your full name..."
//                           className="p-3 outline-none w-[80%] lg:w-[90%]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-12">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="email" className="ps-2">
//                         Email Address
//                       </label>
//                       <div className="flex items-center border rounded-[24px]">
//                         <MailOutlinedIcon sx={{ marginLeft: "15px" }} />
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           placeholder="Enter your email address..."
//                           className="p-3 outline-none w-[80%] lg:w-[90%]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-12">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="phone" className="ps-2">
//                         Phone Number
//                       </label>
//                       <div className="flex items-center border rounded-[24px]">
//                         <LocalPhoneOutlinedIcon sx={{ marginLeft: "15px" }} />
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           maxLength={10}
//                           minLength={10}
//                           placeholder="Enter your phone number..."
//                           className="p-3 outline-none w-[80%] lg:w-[90%]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-12">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="message" className="ps-2">
//                         Message
//                       </label>
//                       <textarea
//                         rows={5}
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter your message here..."
//                         className="p-3 outline-none border rounded-[24px]"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="col-span-12 flex justify-center">
//                     <Button
//                       type="submit"
//                       onClick={handleSubmit}
//                       endIcon={<EastOutlinedIcon />}
//                       variant="contained"
//                       size="large"
//                       sx={{
//                         borderRadius: "24px",
//                         textTransform: "none",
//                         backgroundColor: "#15247a",
//                       }}
//                       disabled={loading} 
//                     >
//                       {loading ? "Submitting..." : "Submit Form"}
//                     </Button>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-3">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.248411720519!2d77.3950231!3d28.5678978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f7b6f8aa4bbbca1%3A0xcd4a6a4f021202d4!2sGrow%20Infinity%20Realtors!5e0!3m2!1sen!2sin!4v1730825249194!5m2!1sen!2sin"
//                 height="500"
//                 style={{ border: "0", width: "100%" }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };





import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { Layout } from "../../components/Layout";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Button } from "@mui/material";

export const Contact = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/contact`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name || !phone) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(apiUrl, formData);

      if (response.data.success) {
        toast.success(response.data.success.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    } finally {
      toast.success("Message sent successfully!");
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Layout>
        {/* Contact Hero - with subtle gradient animation */}
        <div className="contactbanner flex items-center justify-center bg-gradient-to-r from-[#0c1952] via-[#15247a] to-[#1e3bc1] bg-size-200 animate-gradient-x">
          <div className="grid sm:grid-cols-12 w-full">
            <div className="col-span-12 text-center mt-12 lg:mt-24 mb-12 lg:mb-24 flex justify-center items-center">
              <h1 
                className={`font-dmsans text-4xl lg:text-5xl font-medium text-white drop-shadow-lg transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Contact SkyViewEstates
              </h1>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="bg-gray-100">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid sm:grid-cols-12 py-12 px-4">
              {/* Email Card */}
              <div 
                className={`col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-4 px-4 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${
                  isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-100`}
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-gradient-to-r from-[#15247a] to-[#203ac7] rounded-full h-[70px] w-[70px] shadow-md animate-pulse-slow">
                    <EmailIcon
                      sx={{
                        fontSize: { sm: "30px", lg: "40px" },
                        color: "white",
                      }}
                    />
                  </div>

                  <p className="font-dmsans font-semibold text-xl text-[#15247a]">
                    Chat with us
                  </p>
                  <p className="font-roboto text-lg text-[#0529ff] font-medium">
                    Our friendly team is here to help.
                  </p>
                  <p className="font-roboto text-md text-center">
                    support@skyviewestates.com, info@skyviewestates.com
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className={`col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-4 px-4 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${
                  isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-200`}
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-gradient-to-r from-[#15247a] to-[#203ac7] rounded-full h-[70px] w-[70px] shadow-md animate-pulse-slow">
                    <LocationOnIcon
                      sx={{
                        fontSize: { sm: "30px", lg: "40px" },
                        color: "white",
                      }}
                    />
                  </div>

                  <p className="font-dmsans font-semibold text-xl text-[#15247a]">
                    Office Location
                  </p>
                  <p className="font-roboto text-lg text-[#0529ff] font-medium">
                    Come visit our headquarters.
                  </p>
                  <p className="font-roboto text-md text-center">
                    Plot No. BL-34, II Floor, Near Fitness Gym, Sector-116,
                    Noida, Uttar Pradesh-201305
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div 
                className={`col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-4 px-4 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${
                  isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-300`}
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-gradient-to-r from-[#15247a] to-[#203ac7] rounded-full h-[70px] w-[70px] shadow-md animate-pulse-slow">
                    <LocalPhoneIcon
                      sx={{
                        fontSize: { sm: "30px", lg: "40px" },
                        color: "white",
                      }}
                    />
                  </div>

                  <p className="font-dmsans font-semibold text-xl text-[#15247a]">
                    Phone Support
                  </p>
                  <p className="font-roboto text-lg text-[#0529ff] font-medium">
                    Mon-Sun from 8am to 6pm
                  </p>
                  <p className="font-roboto text-md">+91-9990052554</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-12 my-8 lg:my-16">
            {/* Contact Form */}
            <div 
              className={`col-span-12 lg:col-span-6 p-6 m-4 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-3xl lg:text-4xl font-semibold font-roboto text-center text-[#15247a]">
                Let's Get In Touch
              </h1>
              <p className="text-center text-lg font-roboto py-4">
                Or just reach out directly to{" "}
                <span className="text-[#0529ff] hover:underline transition-all">
                  <a href="mailto:info@skyviewestates.com">
                    info@skyviewestates.com
                  </a>
                </span>
              </p>

              <form className="mt-6">
                <div className="grid sm:grid-cols-12 font-roboto gap-6">
                  {/* Name Field */}
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="ps-2 text-[#15247a] font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-3xl hover:border-[#15247a] focus-within:border-[#15247a] focus-within:ring-2 focus-within:ring-[#15247a]/20 transition-all duration-300">
                        <PersonOutlineOutlinedIcon
                          sx={{ marginLeft: "15px", color: "#15247a" }}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name..."
                          className="p-4 outline-none w-[90%] lg:w-[95%] rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="ps-2 text-[#15247a] font-medium">
                        Email Address
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-3xl hover:border-[#15247a] focus-within:border-[#15247a] focus-within:ring-2 focus-within:ring-[#15247a]/20 transition-all duration-300">
                        <MailOutlinedIcon sx={{ marginLeft: "15px", color: "#15247a" }} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address..."
                          className="p-4 outline-none w-[90%] lg:w-[95%] rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="ps-2 text-[#15247a] font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-3xl hover:border-[#15247a] focus-within:border-[#15247a] focus-within:ring-2 focus-within:ring-[#15247a]/20 transition-all duration-300">
                        <LocalPhoneOutlinedIcon sx={{ marginLeft: "15px", color: "#15247a" }} />
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={10}
                          minLength={10}
                          placeholder="Enter your phone number..."
                          className="p-4 outline-none w-[90%] lg:w-[95%] rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="ps-2 text-[#15247a] font-medium">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you today?"
                        className="p-4 outline-none border border-gray-300 rounded-3xl hover:border-[#15247a] focus:border-[#15247a] focus:ring-2 focus:ring-[#15247a]/20 transition-all duration-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-12 flex justify-center mt-4">
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      endIcon={<EastOutlinedIcon />}
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        backgroundColor: "#15247a",
                        padding: "12px 30px",
                        fontSize: "16px",
                        boxShadow: "0 4px 14px rgba(21, 36, 122, 0.3)",
                        "&:hover": {
                          backgroundColor: "#0529ff",
                          transform: "translateY(-3px)",
                          boxShadow: "0 6px 18px rgba(21, 36, 122, 0.5)",
                          transition: "all 0.3s ease",
                        },
                      }}
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div 
              className={`col-span-12 lg:col-span-6 flex items-center justify-center p-6 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.248411720519!2d77.3950231!3d28.5678978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f7b6f8aa4bbbca1%3A0xcd4a6a4f021202d4!2sGrow%20Infinity%20Realtors!5e0!3m2!1sen!2sin!4v1730825249194!5m2!1sen!2sin"
                  height="550"
                  style={{ border: "0", width: "100%" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      
      {/* Add these styles to CSS file */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
};