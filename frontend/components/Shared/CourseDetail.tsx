"use client";
import React from "react";
import Image from "next/image";
import { AllCourses } from "@/types";

type CourseDetailProps = {
  course: AllCourses;
};
const CourseDetail = ({ course }: CourseDetailProps) => {
  return (
    <section className="bg-neutral-200 px-10 py-48 sm:px-10 lg:px-0">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
        <div className="flex flex-wrap items-center gap-20">
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
          <div className="flex flex-col">
            <div>
              <h2 className="mb-4 text-2xl font-bold">{course.title}</h2>
            </div>
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
            </div>
            <div>
              <h2 className="text-lg font-bold">{course.description}</h2>
            </div>
            {course.category.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
              </div>
            ))}
            <div className="flex-between">
              <span>
                By <span className="text-base font-bold">{course.author}</span>
              </span>
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
      </div>
    </section>
  );
};

export default CourseDetail;
