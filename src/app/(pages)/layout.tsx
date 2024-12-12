import Footer from "@/components/sections/Footer";
import LandingHeader from "@/components/ui/LandingHeader";

import { fetchAllCategories } from "@/fetch";
import React from "react";

export default async function PagesLayout({ children }: { children: React.ReactNode }) {
  let res: ISERVICECATEGORY | null = null;
  try {
    res = (await fetchAllCategories()) as ISERVICECATEGORY;
  } catch (err) {
    console.log("Error fetching services:", err);
    return <p>Error loading service details.</p>;
  }

  if (!res) {
    return <p>No services</p>;
  }

  return (
    <>
      <LandingHeader res={res as ISERVICECATEGORY} />
      {children}
      <Footer />
    </>
  );
}
