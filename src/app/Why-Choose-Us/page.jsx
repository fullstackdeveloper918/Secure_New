import React from "react";
import { Metadata } from "next";
// import FaqMain from "@/pages/faq/faq-main";
import WhyChooseUs from "@/pages/WhyChooseUs/WhyChooseUs";

export const metadata = {
  title: "Liko - Faq page",
};

const FaqPage = async () => {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/choose",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  const whyChooseData = data?.data;
  return <WhyChooseUs whyChooseData={whyChooseData} />;
};

export default FaqPage;
