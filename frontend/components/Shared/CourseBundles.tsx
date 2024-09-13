import React from "react";
import Image from "next/image";
import { CourseBundle } from "@/types";

type CourseBundleProps = {
  courses: CourseBundle[];
  title: string;
  maxPackages?: number;
};

function CourseBundles({ courses, title, maxPackages = 4 }: CourseBundleProps) {
  return (
    <section className="bg-neutral-200 pb-12 pt-10">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
        <h2 className="mb-4 pl-5 text-2xl font-bold sm:pl-5 lg:pl-0">
          {title}
        </h2>
        <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-4 px-4 sm:max-w-screen-sm sm:justify-center sm:px-4 lg:max-w-screen-2xl lg:justify-between lg:px-0">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex h-auto w-full flex-col rounded-md border bg-white p-5 sm:w-full lg:w-80"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={300}
                className="mb-4 rounded-md"
              />
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-xl font-semibold">{course.title}</h4>
                <div className="text-right">
                  <h4 className="text-lg text-red-500">
                    <span className="line-through">N</span>
                    {course.newPrice}
                  </h4>
                  <h4 className="text-sm text-gray-500 line-through">
                    <span className="line-through">N</span>
                    {course.oldPrice}
                  </h4>
                </div>
              </div>
              <p className="mb-2 text-sm text-gray-600">
                Expires in {course.date}
              </p>
              <p className="mb-4 text-sm text-gray-700">{course.description}</p>
              <div>
                <h4 className="mb-2 text-base font-semibold">Packages</h4>
                <div className="flex flex-wrap gap-2">
                  {course.packages.slice(0, maxPackages).map((item, index) => (
                    <button
                      key={index}
                      className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseBundles;
