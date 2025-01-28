import React from "react";
import { Metadata } from "next";
// import ServiceMain from "@/pages/service/service";

import ServiceMain from "@/pages/service/service";

export const metadata = {
  title: "Secure 365 - Service page",
};

const ServicePage = async() => {

  const data = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/service",
    {
      cache: "no-store",
    }
  );

  const bannerData = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner/service",
    {
      cache: "no-store",
    }
  );
  const serviceData = await data.json();
  const serviceBannerData = await bannerData.json();

  console.log(serviceData, 'serviceData')
  console.log(serviceBannerData, 'serviceBannerData')


  return (
    <ServiceMain serviceData={serviceData} serviceBannerData={serviceBannerData}/>
  );
};

export default ServicePage;
