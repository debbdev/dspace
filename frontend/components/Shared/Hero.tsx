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

function Hero() {
  const { theme } = useTheme();
  // eslint-disable-next-line no-unused-vars
  const [select, setSelect] = useState<string | null>(null);
  const onSelectChange = (value: string) => {
    setSelect(value);
  };
  return (
    <section
      className={`${theme === "light" ? "text-light-900 bg-neutral-700" : "text-light-900 bg-neutral-600"} bg-hero-image h-96 w-full bg-cover bg-center bg-no-repeat pb-16 pt-24 bg-blend-multiply max-sm:h-full  lg:h-[26rem]`}
    >
      <h1 className="pl-5  text-3xl font-bold max-sm:w-60 sm:w-full sm:pl-10 sm:pr-40 sm:text-3xl lg:w-[45rem] lg:pl-[10.8rem] lg:pr-32 lg:text-5xl">
        Find The Best Online Course For You
      </h1>
      <p className="w-full pl-5 pt-2 text-base sm:pl-10 lg:pl-[10.8rem]">
        Take a course to advance your career
      </p>
      <div className="flex w-full flex-wrap gap-4  py-3 pl-5 pr-4 sm:gap-1 sm:px-10 lg:flex-nowrap lg:gap-40 lg:pl-44 lg:pr-0">
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

        <div className=" text-dark100_light900 flex h-10 w-full items-center py-2 sm:w-full lg:w-[25rem]">
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
              className="text-dark100_light900 background-light800_dark300 w-96 rounded-none border-none focus:outline-none max-sm:w-full sm:w-96 lg:w-96"
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
        <button className="bg-primary-500 mt-2 h-10 w-full rounded-md px-5 py-2 sm:w-full lg:mt-0 lg:w-60">
          Search
        </button>
      </div>

      <p className="w-full pl-5 pt-2 text-base sm:pl-10 lg:pl-[10.8rem]">
        Popular Search :{" "}
        <span>
          {" "}
          Data Analysis, Photoshop, Graphic Design, Web Development, Digital
          Marketing
        </span>
      </p>
    </section>
  );
}

export default Hero;
