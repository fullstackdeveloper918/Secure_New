import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata = {
  title: "Liko - About us page",
};

const  AboutUsPage = async() => {
  const data = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/about",
    {
      cache: "no-store",
    }
  );

  const bannerData = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner/about-us",
    {
      cache: "no-store",
    }
  );
  const aboutResponse = await data.json();
  const bannerResponse = await bannerData.json();

  console.log(bannerResponse, 'bannerResponse')
  return (
    <div className="about_usClass">
      <AboutUsMain aboutResponse={aboutResponse} bannerResponse={bannerResponse}/>
    </div>
    
  );
};

export default AboutUsPage;
