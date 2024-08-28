import React from "react";
import Image from "next/image";
type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  videoSrc: string;
  studentTotal: string;
  author: string;
  oldPrice: string;
  newPrice: string;
};

type CourseListProps = {
  courses: Course[];
  title: string;
};
function Courses({ courses, title }: CourseListProps) {
  return (
    <section className="bg-neutral-200 pb-12 pt-10">
      <div className=" mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
        <div className="flex-between pb-2">
          <h2 className="font-bold">{title}</h2>
          <button className="text-gray-600">see All</button>
        </div>
        <div className="flex-between gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex h-auto w-80 flex-col rounded-md border bg-white p-5"
            >
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
              <div className="">
                <h2 className="text-base">{course.category}</h2>
              </div>
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
                  {course.oldPrice}
                </h4>
                <h4 className="text-base font-bold text-red-500">
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

export default Courses;
