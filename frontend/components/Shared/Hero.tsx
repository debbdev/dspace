"use client";
import React, { useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";

function Hero() {
  const { theme } = useTheme();
  // eslint-disable-next-line no-unused-vars
  const [select, setSelect] = useState<string | null>(null);
  const onSelectChange = (value: string) => {
    setSelect(value);
  };
  const pathname: string | null = usePathname();

  if (!pathname) {
    return null;
  }

  let bgImage = "";
  let heading = "";
  let header = "";
  let showInputDiv = true;

  switch (pathname) {
    case "/course-bundles":
      bgImage = "bg-bundle-hero";
      heading = "Course Bundles Now Available";
      header =
        "Get the perfect bundle that fits all your learning needs. With course bundles, you can get access to multiple courses with a single purchase and save more than 30% on the total cost. Level up with our carefully curated bundles and future-proof your Success.";
      showInputDiv = false;
      break;
    case "/":
      bgImage = "bg-hero-image";
      heading = "Find The Best Online Course For You";
      header = "Take a course to advance your career";
      break;
    case "/explore-courses":
      bgImage = "bg-explore-hero";
      heading = "Explore Online Courses Tailored For You";
      header = "You are one step away from achieving your career";
      showInputDiv = false;
      break;
    default:
      return null;
  }
  return (
    <section
      className={`${theme === "light" ? "text-light-900 bg-neutral-700" : "text-light-900 bg-neutral-600"} ${bgImage} h-96 w-full bg-cover bg-center bg-no-repeat pb-16 pt-24 bg-blend-multiply max-sm:h-full  lg:h-[26rem]`}
    >
      {heading && (
        <h1 className="max-w-screen-sm  pl-5 pr-20 pt-0 text-3xl font-bold sm:max-w-screen-sm sm:pl-10 sm:pr-20 sm:pt-0 sm:text-3xl lg:max-w-screen-sm lg:pl-32 lg:pr-0 lg:pt-10 lg:text-5xl">
          {heading}
        </h1>
      )}
      {header && (
        <p className="max-w-screen-sm pl-5 pt-2 text-base sm:max-w-screen-sm sm:pl-10 lg:max-w-screen-lg lg:pl-32">
          {header}
        </p>
      )}

      {showInputDiv && (
        <div className=" mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
          <div className=" flex w-full flex-wrap gap-4  py-3 px-5  sm:gap-1 sm:px-5 lg:flex-nowrap lg:gap-[11.5rem] lg:px-0">
            <div className="text-dark100_light900 flex h-10 w-full items-center py-2 sm:w-full lg:w-[30rem]">
              <div className="bg-primary-500 flex size-10 items-center justify-center rounded-l-md rounded-r-none">
                <Image
                  src="assets/icons/search.svg"
                  alt="search"
                  width={16}
                  height={16}
                  className="icon-color"
                />
              </div>
              <input
                type="text"
                placeholder="Search for courses"
                className="background-light800_dark300 text-dark100_light900 h-10 w-full px-3 focus:outline-none "
              />
            </div>

            <div className=" text-dark100_light900 flex-between h-10 w-full py-2 sm:w-full lg:w-[27rem]">
              <div className="bg-primary-500 flex size-10 items-center justify-center rounded-l-md rounded-r-none">
                <Image
                  src="assets/icons/gift.svg"
                  alt="search"
                  width={18}
                  height={18}
                  className="icon-color"
                />
              </div>

              <Select onValueChange={onSelectChange}>
                <SelectTrigger
                  id="framework"
                  className="text-dark100_light900 background-light800_dark300 rounded-none border-none focus:outline-none"
                >
                  <SelectValue
                    placeholder="AI"
                    className="w-full focus:outline-none"
                  />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="text-dark100_light900 background-light800_dark300"
                >
                  <SelectItem id="mySelect" value="Digital Marketing">
                    Digital Marketing
                  </SelectItem>
                  <SelectItem id="mySelect" value="Data Analytics">
                    Data Analytics
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button className="bg-primary-500 mt-2 h-10 w-full rounded-md px-5 py-2 sm:w-full lg:mt-0 lg:w-64">
              Search
            </button>
          </div>

          <p className=" w-full px-5 pt-2 text-base sm:px-10 lg:pl-0">
            Popular Search :
            <span className="">
              Data Analysis, Photoshop, Graphic Design, Web Development, Digital
              Marketing
            </span>
          </p>
        </div>
      )}
    </section>
  );
}

export default Hero;
