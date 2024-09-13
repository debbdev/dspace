// "use client";
// import React from "react";
// import { allCourses } from "@/constants";
// import CourseDetail from "../../../components/Shared/CourseDetail";
// import Courses from "../../../components/Shared/Courses";
// import { useRouter } from "next/navigation";
// import { title } from "process";

// function page() {
//   const router = useRouter();
//   const { param } = router.query;
//   const [type, value] = param?.split("/") || [];
//   // const [course, setCourse] = useState<CourseBundle | null>(null);

//   // useEffect(() => {
//   //   if (id) {
//   //     fetch(`/api/courses/${id}`)
//   //       .then(response => response.json())
//   //       .then(data => setCourse(data))
//   //       .catch(error => console.error("Error fetching course data:", error));
//   //   }
//   // }, [id]);
//   if (param === id) {
//     const course = allCourses.find((course) => course.id === id);

//     if (!course) return <div>Course not found</div>;
//     return <CourseDetail />;
//   } else if (param === title) {
//     const filteredCourses = allCourses
//       .flat()
//       .filter((course) =>
//         course.category.some((categoryItem) => categoryItem.title === title)
//       );

//     return <Courses courses={filteredCourses} title={title as string} />;
//   }
// }
// export default page;
