import React, { useState } from "react";
import { Button, Checkbox, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const PropertyEnquiryForm = ({ id, handleClose, open }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    property: id,
    mobile: "",
    reason: "",
    dealer: "",
  });
  const [error, setError] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // 90% of the screen width
    maxWidth: 600, // Maximum width of 600px
    bgcolor: "#f3f3fe",
    borderRadius: "40px",
    boxShadow: 24,
    py: 2,
    px: 1,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.reason ||
      !formData.dealer
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      // Sending data using axios
      const response = await axios.post(
        `${process.env.BASE_URL}/api/v1/property-enquiry`,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          mobile: formData.mobile,
          property: id,
          reason: formData.reason,
          dealer: formData.dealer,
        }
      );

      if (response.data.success) {
        toast.success(response.data.success.message); // Show success toast
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          property: id,
          mobile: "",
          reason: "",
          dealer: "",
        });
        // Successfully sent the enquiry
        handleClose(); // Close the modal on success
      } else {
        console.log(response.data);
        setError(
          "There was an issue submitting your enquiry. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Network error. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          borderRadius: "40px",
        }}
      >
        <Box sx={style}>
          <h1 className="font-roboto text-center text-2xl lg:text-4xl py-2">
            Contact Us
          </h1>
          <p className="font-roboto text-center text-sm lg:text-lg">
            We will get back to you asap!
          </p>
          {error && <Typography color="error">{error}</Typography>}
          <form className="mx-3 lg:mx-8 mt-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-3">
              <div className="col-span-6">
                <div className="flex border rounded-lg items-center bg-white">
                  <div className="flex justify-center ps-3">
                    <PersonIcon size="large" sx={{ color: "gray" }} />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    className="outline-none p-3 rounded-lg w-full"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex border rounded-lg items-center bg-white">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="outline-none p-3 rounded-lg w-full"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex border rounded-lg items-center bg-white">
                  <div className="flex justify-center ps-3">
                    <MarkunreadIcon sx={{ color: "gray" }} />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="outline-none p-3 rounded-lg w-full"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex border rounded-lg items-center bg-white">
                  <div className="flex justify-center ps-3">
                    <LocalPhoneIcon sx={{ color: "gray" }} />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="outline-none p-3 rounded-lg w-full"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <FormLabel
                  size="small"
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontWeight: "bold" }}
                >
                  Your reason to buy is?
                </FormLabel>
                <RadioGroup
                  row
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  // name="row-radio-buttons-group"
                  size="small"
                >
                  <FormControlLabel
                    size="small"
                    value="investment"
                    control={<Radio size="small" />}
                    label="Investment"
                  />
                  <FormControlLabel
                    value="business"
                    size="small"
                    control={<Radio size="small" />}
                    label="Business use"
                  />
                </RadioGroup>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontWeight: "bold" }}
                >
                  Are you a property dealer?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="dealer"
                  size="small"
                  required
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio size="small" />}
                    label="Yes"
                    size="small"
                  />
                  <FormControlLabel
                    size="small"
                    value="no"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </div>
              <div className="col-span-12">
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label={
                    <Typography variant="body2" sx={{ fontSize: "0.78rem" }}>
                      I agree to be contacted by SkyViewEstates agents via
                      whatsapp, SMS, Call, Email etc.
                    </Typography>
                  }
                />
              </div>
              <div className="col-span-12">
                <Button
                  variant="contained"
                  sx={{
                    background: "#03002E",
                    textTransform: "none",
                    padding: { xs: "5px", sm: "5px", md: "10px" },
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
