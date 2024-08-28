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
          <h2>{title}</h2>
          <button>see All</button>
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
                <Image
                  src="/assets/icons/users.svg"
                  width={10}
                  height={10}
                  alt="students"
                />
                <p>{course.studentTotal}</p>
                <Image
                  src="/assets/icons/users.svg"
                  width={10}
                  height={10}
                  alt="students"
                />
              </div>
              <div className="">
                <h2>{course.description}</h2>
              </div>
              <div className="">
                <h2>{course.category}</h2>
              </div>
              <div className="flex-between">
                <h4>By {course.author}</h4>{" "}
                <Image
                  src="/assets/icons/users.svg"
                  width={10}
                  height={10}
                  alt="students"
                />{" "}
                <h4>{course.oldPrice}</h4>
                <h4>{course.newPrice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
