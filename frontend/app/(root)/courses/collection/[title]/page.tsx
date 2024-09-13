"use client";
import { useParams } from "next/navigation";
import React from "react";
// import { AllCourses } from "@/types";
import { allCourses } from "@/constants";
import Course from "@/components/Shared/Course";

function CollectionPage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title as string);
  const filteredCourses = allCourses.filter((course) =>
    course.category.some(
      (categoryItem) => categoryItem.collection === decodedTitle
    )
  );

  // Debugging
  console.log("Decoded Title:", decodedTitle);
  // console.log("Grouped Courses:", groupedCourses);
  console.log("Filtered Courses:", filteredCourses);
  return <Course courses={filteredCourses} />;
}

export default CollectionPage;
