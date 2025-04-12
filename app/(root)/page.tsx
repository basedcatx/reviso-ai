import React from "react";
import { Hero } from "@/components/Hero";
import { Onboarding } from "@/components/Onboarding";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className={"min-h-screen w-full p-2 max-w-screen mx-auto"}>
      <Hero />
      <Onboarding />
      <Footer />
    </main>
  );
};
export default Page;
