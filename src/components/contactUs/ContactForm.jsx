// import React from "react";
// import loction_icon from "../../assets/images/svg/loction_icon.svg";
// import sms_icon from "../../assets/images/svg/sms_icon.svg";
// import mobile_icon from "../../assets/images/svg/mobile_icon.svg";
// import user_icon from "../../assets/images/svg/user_icon.svg";
// import eamil_icon from "../../assets/images/svg/email_icon.svg";
// import edit_icon from "../../assets/images/svg/edit_icon.svg";
// import phone_icon from "../../assets/images/svg/white_phone.svg";

// const ContactForm = () => {
//   return (
//     <div className="bg-black py-5">
//       <div className="container">
//         <div className="row justify-content-between">
//           <div className="col-lg-4">
//             <h4 className="fs_30 fw-semibold ff_s text-white">
//               Have Questions?<br className="d-md-block d-none"></br> Get in
//               Touch!
//             </h4>
//             <p className="fs_14 ff_n fw-semibold mb-0 mt-2 clr_lightgray">
//               Have questions, feedback, or need assistance? Our team is just a
//               message away! Whether you’re seeking support, want to share your
//               thoughts.
//             </p>
//             <div className="d-flex gap-3 mt-4 align-items-center">
//               <img src={loction_icon} alt="loction_icon" />
//               <p className="mb-0 ff_n fw-semibold text-white fs_14">
//                 Building no. 464, Kadipur Enclave, Sector 10, Opp. City Bus
//                 Depot, Gurugram, 122001
//               </p>
//             </div>
//             <div className="d-flex gap-3 mt-3 align-items-center">
//               <img src={sms_icon} alt="loction_icon" />
//               <p className="mb-0 ff_n fw-semibold text-white fs_14">
//                 Support@hkimedia.com
//               </p>
//             </div>
//             <div className="d-flex gap-3 mt-3 align-items-center">
//               <img src={mobile_icon} alt="loction_icon" />
//               <p className="mb-0 ff_n fw-semibold text-white fs_14">
//                 +1 587 785 4578
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-6 mt-4 mt-lg-0">
//             <div className="row">
//               <div className="col-md-6 ">
//                 <div
//                   className="d-flex border border-1 text-white rounded-1 py-2 px-3"
//                   style={{ backgroundColor: "#262626" }}
//                 >
//                   <img src={user_icon} alt="user_icon" />
//                   <input
//                     style={{ color: "white" }}
//                     className=" bg-transparent border-0 px-2 text-white ff_s"
//                     placeholder="Name"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mt-4 mt-md-0 ">
//                 <div
//                   className="d-flex border border-1 text-white rounded-1 py-2 px-3"
//                   style={{ backgroundColor: "#262626" }}
//                 >
//                   <img src={eamil_icon} alt="user_icon" />
//                   <input
//                     style={{ color: "white" }}
//                     className=" bg-transparent border-0 px-2 text-white ff_s"
//                     placeholder="Email Address"
//                     type="email"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mt-4">
//                 <div
//                   className="d-flex border border-1 text-white rounded-1 py-2 px-3"
//                   style={{ backgroundColor: "#262626" }}
//                 >
//                   <img src={phone_icon} alt="user_icon" />
//                   <input
//                     style={{ color: "white" }}
//                     className=" bg-transparent border-0 px-2 text-white ff_s"
//                     placeholder="Address"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mt-4">
//                 <select
//                   className="d-flex border w-100 border-1 text-white rounded-1 py-2 px-3"
//                   style={{ backgroundColor: "#262626" }}
//                   name=""
//                   id=""
//                 >
//                   <option value="Subject">Subject</option>
//                 </select>
//               </div>
//               <div className="col-12 mt-4 position-relative">
//                 <div
//                   className="d-flex border border-1 text-white rounded-1 py-2 ps-0 px-3"
//                   style={{ backgroundColor: "#262626" }}
//                 >
//                   <img
//                     className=" position-absolute ps-3 pt-3 top-0"
//                     src={edit_icon}
//                     alt="user_icon"
//                   />
//                   <textarea
//                     rows={6}
//                     style={{ color: "white" }}
//                     className=" bg-transparent ps-4 ms-3 w-100 border-0 px-2 text-white ff_s"
//                     placeholder="How can we help you ? Feel free to get in touch!"
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="d-flex mt-3 gap-2 align-items-center">
//                 <input type="checkbox" name="" id="click" />
//                 <label
//                   className="fs_14 ff_s fw-medium text-white"
//                   htmlFor="click"
//                 >
//                   I agree that my data is collected and stored
//                 </label>
//               </div>
//               <div>
//                 <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import loction_icon from "../../assets/images/svg/loction_icon.svg";
import sms_icon from "../../assets/images/svg/sms_icon.svg";
import Phone_icon from "../../assets/images/svg/call_icon.svg";
import user_icon from "../../assets/images/svg/user_icon.svg";
import eamil_icon from "../../assets/images/svg/email_icon.svg";
import edit_icon from "../../assets/images/svg/edit_icon.svg";
import phone_icon from "../../assets/images/svg/white_phone.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    subject: "",
    phone: "",
    vertiale: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAdmission, setShowAdmission] = useState(false);
  const [subjectOptions, setSubjectOptions] = useState([
    "Feedback",
    "Support",
    "Business Development",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "message") {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 150) {
        setErrorMessage("Message cannot exceed 150 words.");
        return;
      } else {
        setErrorMessage("");
      }
    }

    // Update "Subject" options based on "Vertical"
    if (name === "vertiale") {
      if (value === "Skilling") {
        setSubjectOptions((prevOptions) => {
          // Add "Admission" only if it doesn't already exist
          return prevOptions.includes("Admission")
            ? prevOptions
            : [...prevOptions, "Admission"];
        });
      } else {
        // Reset to default options when "Skilling" is not selected
        setSubjectOptions(["Feedback", "Support", "Business Development"]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bzm9a1n", // Replace with your EmailJS Service ID
        "template_fexwsif", // Replace with your EmailJS Template ID
        formData,
        "YKCytqrtQ0SjktFaQ" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({
            name: "",
            email: "",
            address: "",
            subject: "",
            phone: "",
            vertiale: "",
            message: "",
          });
        },
        (err) => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <h4 className="fs_30 fw-semibold ff_s text-white">
              Have Questions?
              <br className="d-md-block d-none" /> Get in Touch!
            </h4>
            <p className="fs_14 ff_n fw-semibold mb-0 mt-2 clr_lightgray">
              Have questions, feedback, or need assistance? Our team is just a
              message away!
            </p>
            <div className="d-flex gap-3 mt-4 align-items-center">
              <img src={loction_icon} alt="location icon" />
              <p className="mb-0 ff_n fw-semibold text-white fs_14">
                Building no. 464, Kadipur Enclave, Sector 10, Opp. City Bus
                Depot, Gurugram, 122001
              </p>
            </div>
            <div className="d-flex gap-3 mt-3 align-items-center">
              <img src={sms_icon} alt="email icon" />
              <p className="mb-0 ff_n fw-semibold text-white fs_14">
                Support@hkimedia.com
              </p>
            </div>
            {/* <div className="d-flex gap-3 mt-3 align-items-center">
              <img src={mobile_icon} alt="mobile icon" />
              <p className="mb-0 ff_n fw-semibold text-white fs_14">
                +1 587 785 4578
              </p>
            </div> */}
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="d-flex border border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <img src={user_icon} alt="user icon" />
                    <input
                      required
                      style={{ color: "white" }}
                      className="bg-transparent w-100 border-0 px-2 text-white ff_s"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div
                    className="d-flex border border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <img src={eamil_icon} alt="email icon" />
                    <input
                      required
                      style={{ color: "white" }}
                      className="bg-transparent  w-100 border-0 px-2 text-white ff_s"
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-4 ">
                  <div
                    className="d-flex border border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <img src={Phone_icon} alt="email icon" />
                    <input
                      required
                      style={{ color: "white" }}
                      className="bg-transparent  w-100 border-0 px-2 text-white ff_s"
                      placeholder="Mobile Number"
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* <div className="col-md-6 mt-4">
                  <div
                    className="d-flex border border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <img src={phone_icon} alt="address icon" />
                    <input
                      required
                      style={{ color: "white" }}
                      className="bg-transparent border-0 px-2 text-white ff_s"
                      placeholder="Address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div> */}

                <div className="col-md-6 mt-4">
                  {/* <select
                    required
                    className="d-flex border w-100 border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                    name="vertiale"
                    value={formData.vertiale}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Vertical
                    </option>
                    <option value="HKI Animatica">HKI Animatica</option>
                    <option value="Skilling">Skilling</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Media Matrix App">Media Matrix App</option>
                  </select> */}
                  <select
                    required
                    className="d-flex border w-100 border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Vertical
                    </option>
                    <option value="HKI Animatica">HKI Animatica</option>
                    <option value="Skilling">Skilling</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Media Matrix App">Media Matrix App</option>
                  </select>
                </div>
                <div className="col-md-12 mt-4">
                  <select
                    required
                    className="d-flex border w-100 border-1 text-white rounded-1 py-2 px-3"
                    style={{ backgroundColor: "#262626" }}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Subject
                    </option>
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 mt-4 position-relative">
                  <div
                    className="d-flex border border-1 text-white rounded-1 py-2 ps-0 px-3"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <img
                      className="position-absolute ps-3 pt-3 top-0"
                      src={edit_icon}
                      alt="edit icon"
                    />
                    <textarea
                      required
                      rows={6}
                      style={{ color: "white" }}
                      className="bg-transparent ps-4 ms-3 w-100 border-0 px-2 text-white ff_s"
                      placeholder="How can we help you? Feel free to get in touch!"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  {successMessage && (
                    <p className="text-success mt-3">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-danger mt-3">{errorMessage}</p>
                  )}
                </div>
                <div>
                  <button
                    className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
