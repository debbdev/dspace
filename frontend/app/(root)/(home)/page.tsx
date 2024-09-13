import React from "react";
import Courses from "@/components/Shared/Courses";
import { allCourses } from "@/constants";
import { AllCourses } from "@/types";

function Page() {
  const groupedCourses = allCourses.reduce(
    (acc, course) => {
      course.category.forEach((cat) => {
        const collection = cat.collection;
        if (!acc[collection]) {
          acc[collection] = [];
        }
        acc[collection].push(course);
      });
      return acc;
    },
    {} as Record<string, AllCourses[]>
  );

  return (
    <>
      {Object.entries(groupedCourses).map(([collection, courses], index) => (
        <Courses key={index} courses={courses} title={collection} />
      ))}
    </>
  );
}

export default Page;
