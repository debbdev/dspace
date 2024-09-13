import React from "react";
import Image from "next/image";
import { AllCourses } from "@/types";
import Link from "next/link";

type CourseListProps = {
  courses: AllCourses[];
};
function Course({ courses }: CourseListProps) {
  return (
    <section className=" bg-neutral-200 py-32">
      <div className=" mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
        {/* <div className="flex-between  px-5 pb-2 sm:px-5 lg:px-2">
          <h2 className="font-bold">{title}</h2>
          <Link href={`/courses/${title}`}>
            <button className="text-gray-600">see All</button>
          </Link>
        </div> */}
        <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-4 px-4 sm:max-w-screen-sm sm:justify-center sm:px-4 lg:max-w-screen-2xl lg:justify-between lg:px-0">
          {courses.map((course) => (
            <div
              className="flex h-auto w-full  flex-col rounded-md border bg-white p-5 sm:w-full  lg:w-80"
              key={course.id}
            >
              <Link href={`/courses/course/${course.id}`}>
                <video
                  width="320"
                  height="320"
                  controls
                  preload="none"
                  className="py-4"
                >
                  <source src={course.videoSrc} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                </video>
              </Link>
              <div className="flex-between">
                <div className="flex-start gap-2">
                  <Image
                    src="/assets/icons/users.svg"
                    width={10}
                    height={10}
                    alt="students"
                    className="icon-color"
                  />
                  <p>{course.studentTotal}</p>
                </div>
                <div>
                  <Image
                    src="/assets/icons/dots.svg"
                    width={15}
                    height={15}
                    alt="students"
                    className="invert-colors"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-lg font-bold">{course.description}</h2>
              </div>
              {course.category.map((item) => (
                <Link key={item.id} href={`/courses/category/${item.title}`}>
                  <div className="">
                    <h2>{item.title}</h2>
                  </div>
                </Link>
              ))}
              <div className="flex-between">
                <span>
                  By {""}
                  <span className="text-base font-bold">{course.author}</span>
                </span>
                <Image
                  src="/assets/icons/users.svg"
                  width={10}
                  height={10}
                  alt="students"
                />{" "}
                <h4 className="text-base font-bold text-gray-500 line-through">
                  <span className="line-through">N</span>
                  {course.oldPrice}
                </h4>
                <h4 className="text-base font-bold text-red-500">
                  <span className="line-through">N</span>
                  {course.newPrice}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Course;
