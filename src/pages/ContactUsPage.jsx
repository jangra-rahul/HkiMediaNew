import React, { useEffect } from "react";
import ContactHero from "../components/contactUs/ContactHero";
import ContactForm from "../components/contactUs/ContactForm";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
};

export default ContactUsPage;
