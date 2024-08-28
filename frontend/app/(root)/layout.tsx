import Footer from "@/components/Shared/Footer";
import Hero from "@/components/Shared/Hero";
import NavBar from "@/components/Shared/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <Hero />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default layout;
