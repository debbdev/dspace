import React from "react";

function page() {
  const faqs = [
    {
      question: "What is CourseBundle?",
      answer:
        "CourseBundle is a personalized collection of courses selected by students in preparation for a career pathway.",
    },
    {
      question: "Who is the course for?",
      answer:
        "CourseBundle is a personalized collection of courses selected by students in preparation for a career pathway.",
    },
    {
      question: "Are the courses virtual?",
      answer:
        "CourseBundle is a personalized collection of courses selected by students in preparation for a career pathway.",
    },
    {
      question: "What is CourseBundle?",
      answer:
        "CourseBundle is a personalized collection of courses selected by students in preparation for a career pathway.",
    },
  ];

  return (
    <section className="pb-16 pt-40">
      <div className="mx-auto max-w-screen-sm py-5 pl-16 sm:max-w-screen-sm sm:pl-16 lg:max-w-screen-2xl lg:pl-0">
        <h1 className="h2-bold">Frequently Asked Questions</h1>
      </div>
      <div className="flex-between mx-auto max-w-screen-sm flex-wrap py-10 align-top sm:max-w-screen-sm lg:max-w-screen-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col px-16 pt-5 sm:px-16 sm:pt-5 lg:px-0 lg:pt-0"
          >
            <div className="mb-5 h-auto w-[23.5rem] rounded-md border bg-white p-5 sm:w-[23.5rem] lg:w-80">
              <h2 className="h2-semibold pb-4">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
