import React from "react";
import { Metadata } from "next";
// import FaqMain from "@/pages/faq/faq-main";
import WhyChooseUs from '@/pages/WhyChooseUs/WhyChooseUs'

export const metadata: Metadata = {
  title: "Liko - Faq page",
};

const FaqPage = () => {
  return (
    // <FaqMain/>
    <WhyChooseUs />
  );
};

export default FaqPage;
