import React from "react";
import CourseBundles from "@/components/Shared/CourseBundles";
import { courseBundles } from "@/constants";
function page() {
  return (
    <>
      <CourseBundles courses={courseBundles} title="Course Bundles" />
    </>
  );
}

export default page;
