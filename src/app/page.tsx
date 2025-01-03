import { Metadata } from "next";
import HomeOnePage from "../pages/homes/homes-1";

export const metadata: Metadata = {
  title: "Secure365 - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
