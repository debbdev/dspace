import React from "react";
import Image from "next/image";
import { instructor } from "@/constants";

function page() {
  return (
    <section className="bg-neutral-200 py-14">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg">
        <div className=" max-w-screen-sm px-6 py-10 align-top sm:max-w-screen-sm sm:px-6 lg:max-w-screen-lg lg:px-0">
          {instructor.map((item, index) => (
            <div
              key={index}
              className="flex-between mb-10  max-w-screen-sm flex-wrap rounded-md border bg-white px-5 py-8 sm:max-w-screen-sm sm:flex-wrap sm:px-5 sm:py-8 lg:max-w-screen-lg lg:flex-nowrap lg:px-24 lg:py-20"
            >
              <div className="">
                <Image
                  src={item.img}
                  width={500}
                  height={300}
                  alt="group manager"
                  className="h-full"
                />
              </div>
              <div className="p-5">
                <hr className=" max-w-screen-sm border-2 border-red-600  sm:max-w-screen-sm lg:mx-0 lg:max-w-screen-lg" />
                <h3 className="h3-semibold pb-4">{item.heading}</h3>
                <p className="pb-5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg"
        id="becomeAnInstructor"
      >
        <h2 className="pb-8 pt-5 text-center text-4xl font-semibold capitalize">
          join us today!
          <hr className="mx-auto mt-3 w-32 border-2 border-red-500" />
        </h2>

        <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
          <form className="mt-4">
            <div className=" px-6 sm:px-6 lg:px-0">
              <div className="  mb-4">
                <label
                  htmlFor="form-name"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  Name
                </label>
                <input
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
              <div className=" mb-4 ">
                <label
                  htmlFor="form-email"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  Email
                </label>
                <input
                  id="form-email"
                  required
                  autoComplete="email"
                  maxLength={80}
                  name="email"
                  type="email"
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
              <div className=" mb-4 ">
                <label
                  htmlFor="form-phone"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  Phone Number (WhatsApp or Telegram Number recommended)
                </label>
                <input
                  id="form-phone"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
              <div className=" mb-4">
                <label
                  htmlFor="form-fname"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  What course do you want to offer?
                </label>
                <input
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="form-position"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  Have you created an online course before?
                </label>
                <input
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
              <div className=" mb-4">
                <label
                  htmlFor="form-info"
                  className="text-sm sm:text-sm lg:text-base"
                >
                  Additional Info
                </label>
                <textarea
                  id="form-message"
                  required
                  name="message"
                  rows={5}
                  className=" mt-1 block w-full rounded-md border border-gray-400 p-2"
                />
              </div>
            </div>
            <div className=" px-6 sm:px-6 lg:px-0">
              <button
                className="brand-gradient  container rounded px-6 py-3 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
