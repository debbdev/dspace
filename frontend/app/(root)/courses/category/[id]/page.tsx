"use client";
import { useParams } from "next/navigation";
import React from "react";
import { allCourses } from "@/constants";
import Course from "@/components/shared/Course";

function CategoryPage() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id as string);
  const filteredCourses = allCourses.filter((course) =>
    course.category.some((categoryItem) => categoryItem.title === decodedId)
  );

  // Debugging
  console.log("Decoded Title:", id);
  // console.log("Grouped Courses:", groupedCourses);
  console.log("Filtered Courses:", filteredCourses);
  return <Course courses={filteredCourses} />;
}

export default CategoryPage;
