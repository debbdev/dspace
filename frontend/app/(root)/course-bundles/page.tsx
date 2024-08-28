import React from "react";
import CourseBundles from "@/components/Shared/CourseBundles";

function page() {
  const courseBundles = [
    {
      id: 1,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 2,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 3,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 4,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 5,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 6,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
    {
      id: 7,
      title: "Data Analysis Cooperate Bundle",
      description:
        "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
      image: "/assets/images/course.jpg",
      packages: [
        "Data",
        "Data Analysis",
        "Power Bi",
        "Cooperate Data Analysis",
      ],
      date: "2024-30-08",
      oldPrice: "10,950",
      newPrice: "5,550",
    },
  ];

  return (
    <>
      <CourseBundles courses={courseBundles} title="Course Bundles" />
    </>
  );
}

export default page;
