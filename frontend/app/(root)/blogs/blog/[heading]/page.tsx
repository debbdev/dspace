"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogs } from "@/constants";
import Link from "next/link";

function page() {
  const { heading } = useParams();
  const decodedHeading = decodeURIComponent(heading as string);
  console.log(heading);
  const blog = blogs.find((blog) => blog.heading === decodedHeading);
  return (
    <section className="pb-16 pt-32">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl">
        <div className="flex-between px-6 sm:px-6 lg:px-0">
          <h4>
            <span>Our Blog </span>
            {blog.heading}
          </h4>
          <span>Back to Blog</span>
        </div>
        <h2 className="h2-bold px-6 pb-10 pt-5 sm:px-6 lg:px-0">
          {blog.heading}
        </h2>
        <div className="mx-auto max-w-screen-sm px-6 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-md lg:px-0">
          <Image src={blog.img} alt={blog.heading} width={1000} height={1000} />
          <div className="flex-between py-5">
            <span>Published {blog.time} ago</span>
            <span className="flex-between gap-2">
              <Image
                src="/assets/icons/facebook.svg"
                width={20}
                height={20}
                alt="facebook"
              />
              <Image
                src="/assets/icons/telegram.svg"
                width={20}
                height={20}
                alt="facebook"
              />
              <Image
                src="/assets/icons/instagram.svg"
                width={20}
                height={20}
                alt="facebook"
              />
            </span>
          </div>
          <p className="">{blog.blogText}</p>
        </div>
        <div className="mx-auto max-w-screen-sm px-6 pb-10 pt-12 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-2xl lg:px-0">
          <Link href={`/explore-courses`}>
            <button className="brand-gradient mx-auto flex rounded px-6 py-3 text-center text-white">
              Take a course Today
            </button>
          </Link>
          <Link href={``}>
            <h5 className="font-medium">Previous</h5>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default page;
