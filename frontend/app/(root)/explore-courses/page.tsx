import React from "react";
import ExploreCourses from "@/components/Shared/ExploreCourses";
import { allCourses } from "@/constants";

function page() {
  return (
    <>
      <ExploreCourses courses={allCourses} title="Explore Courses" />
    </>
  );
}

export default page;
