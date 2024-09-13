import React from "react";
import Image from "next/image";
import { AllCourses } from "@/types";

type CourseListProps = {
  courses: AllCourses[];
  title: string;
};
function ExploreCourses({ courses, title }: CourseListProps) {
  return (
    <section className="bg-neutral-200 pb-12 pt-10">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
        <div className="flex-between pb-2">
          <h2 className="pl-5 font-bold sm:pl-5  lg:pl-0">{title}</h2>
        </div>
        <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-4 px-4 sm:max-w-screen-sm sm:justify-center sm:px-4 lg:max-w-screen-2xl lg:justify-between lg:px-0">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex h-auto w-full flex-row gap-4 rounded-md border bg-white p-5 sm:w-full lg:w-[30rem]"
            >
              <div className="">
                <video
                  width="500"
                  height="500"
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
              </div>
              <div className="">
                <div className="flex-between">
                  <div className="flex-start gap-3">
                    <Image
                      src="../assets/icons/users.svg"
                      width={10}
                      height={10}
                      alt="students"
                      className="icon-color"
                    />
                    <p>{course.studentTotal}</p>
                  </div>

                  <Image
                    src="../assets/icons/users.svg"
                    width={10}
                    height={10}
                    alt="students"
                    className="icon-color"
                  />
                </div>
                <div className="">
                  <h2 className="text-base font-bold">{course.description}</h2>
                </div>
                {course.category.map((item) => (
                  <div className="" key={item.id}>
                    <h2>{item.title}</h2>
                  </div>
                ))}

                <div className="flex-start gap-4">
                  <span className="">By</span>
                  <span className="text-base font-bold">{course.author}</span>
                </div>
                <div className="flex-start gap-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCourses;
