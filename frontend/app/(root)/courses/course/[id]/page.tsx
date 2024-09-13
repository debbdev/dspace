// app/courses/course/[id]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import { allCourses } from "@/constants";
import CourseDetail from "@/components/Shared/CourseDetail";

function CoursePage() {
  const { id } = useParams();
  const courseId = parseInt(id as string, 10);

  const course = allCourses.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return <CourseDetail course={course} />;
}

export default CoursePage;
