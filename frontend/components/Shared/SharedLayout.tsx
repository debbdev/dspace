"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function SharedLayout() {
  const pathname: string | null = usePathname();

  if (!pathname) {
    return null;
  }

  let imageClass = "";
  let header = "";
  let heading = "";
  let headingText = "";
  let subHeader = "";
  let subHeaderText = "";

  switch (pathname) {
    case "/support-us":
      imageClass = "/assets/images/support1.jpg";
      header = "Support Us";
      heading = "Building Partnerships";
      headingText =
        "Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact.";
      subHeader = "Support Mission";
      subHeaderText =
        " Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact. We partner with organisations around the world and provide access to opportunities that can help you at any stage in your career journey.";
      break;
    case "/privacy-policy":
      imageClass = "/assets/images/privacy1.jpg";
      header = "Privacy Policy";
      heading = "Building Partnerships";
      headingText =
        "Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact.";
      subHeader = "Support Mission";
      subHeaderText =
        " Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact. We partner with organisations around the world and provide access to opportunities that can help you at any stage in your career journey.";
      break;
    case "/about-us":
      imageClass = "/assets/images/about1.jpg";
      header = "About Us";
      heading = "Building Partnerships";
      headingText =
        "Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact.";
      subHeader = "Support Mission";
      subHeaderText =
        " Our strategy is simple. We leverage our strength with the strength of other organizations to dramatically increase our impact. We partner with organisations around the world and provide access to opportunities that can help you at any stage in your career journey.";
      break;
    default:
      return null;
  }

  return (
    <section className="">
      <div className="mx-auto max-w-screen-sm py-5 pl-16 sm:max-w-screen-sm sm:pl-16 lg:max-w-screen-lg lg:pl-0">
        <h1 className="h2-bold ">{header}</h1>
      </div>
      <div className="mx-auto flex max-w-screen-sm flex-wrap justify-between py-10 align-top sm:max-w-screen-sm lg:max-w-screen-lg">
        <div className="h-full px-16 sm:px-16 lg:px-0">
          <Image
            src={imageClass}
            width={500}
            height={300}
            alt="group manager"
          />
        </div>
        <div className="flex flex-col px-16 pt-5 sm:px-16 sm:pt-5 lg:px-0 lg:pt-0">
          <div className="mb-5 h-auto w-[23.5rem] rounded-md border bg-white p-5 sm:w-[23.5rem] lg:w-96">
            <h2 className="h2-semibold">{heading}</h2>
            <p>{headingText}</p>
          </div>
          <div className="h-auto w-[23.5rem] rounded-md border bg-white p-5 sm:w-[23.5rem] lg:w-96">
            <h2 className="h3-semibold">{subHeader}</h2>
            <p>{subHeaderText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharedLayout;
