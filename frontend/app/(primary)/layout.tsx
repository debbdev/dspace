import Footer from "@/components/Shared/Footer";
import SupportHero from "@/components/Shared/SupportHero";
import NavBar from "@/components/Shared/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <SupportHero />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default layout;
