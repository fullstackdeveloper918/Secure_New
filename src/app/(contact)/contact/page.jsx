import React from "react";
import ContactMain from "@/pages/contact/contact";

export const metadata = {
  title: "Secure 365 - Contact page",
};

const ContactPage = async() => {


  const data = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/contact",
    {
      cache: "no-store",
    }
  );


  const response = await data.json();
  const contactData = response?.data;

  // contact check


  return (
    <ContactMain contactData={contactData}/>
  );
};

export default ContactPage;
