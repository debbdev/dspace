import React from "react";

function page() {
  return (
    <section className="bg-neutral-200 py-20">
      <div className="flex-between mx-auto max-w-screen-sm flex-wrap gap-5 px-6 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-lg lg:px-0">
        <div className="max-w-screen-sm border-l-4 border-red-500  sm:max-w-screen-sm  lg:w-96 ">
          <h2 className="px-8 text-4xl font-semibold ">
            Join our software developer Team
          </h2>
        </div>
        <div className="max-w-screen-sm sm:max-w-screen-sm lg:w-[35rem]">
          <p>
            We are looking for creative, innovative individuals who are willing
            to work with us on amazing projects.
            <br />
            Developers who are open to learning and advancing their expertise
            daily.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg">
        <h6 className="mt-12 text-center text-xl capitalize">
          Career Opportunities
        </h6>
        <h2 className="pb-8 pt-5 text-center text-4xl font-semibold">
          Become An Associate
        </h2>
        <div className="flex-between flex-wrap px-6 sm:px-6 lg:px-0">
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem] border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg">
        <h6 className="mt-12 text-center text-xl capitalize">
          Discover Your Potential
        </h6>
        <h2 className="pb-8 pt-5 text-center text-4xl font-semibold">
          Careers at XSpace
        </h2>
        <div className="flex-between flex-wrap px-6 sm:px-6 lg:px-0">
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem] border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
          <div className="mb-5 h-auto w-[30rem]  border-l-4 border-red-500 bg-white px-5 pb-14 pt-5 sm:w-[30rem] lg:w-[30rem]">
            <h4>Earnings</h4>
            <p>
              We are looking for creative, innovative individuals who are
              willing to work with us on amazing projects. Developers who are
              open to learning and advancing their expertise daily.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg"
        id="joinOurDevelopers"
      >
        <h6 className="mt-12 text-center text-xl capitalize">
          You can be the next person to join us
        </h6>
        <h2 className="pb-8 pt-5 text-center text-4xl font-semibold">
          Apply Now
        </h2>

        <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-2xl">
          <form className="mt-4">
            <div className="flex-between flex-wrap px-6 sm:px-6 lg:px-0">
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="First Name"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="Last Name"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className="flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="Email"
                  id="form-email"
                  required
                  autoComplete="email"
                  maxLength={80}
                  name="email"
                  type="email"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="Phone"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="City"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="Position"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="LinkedIn Profile URL"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className=" flex-between mb-4 w-full sm:w-full lg:w-60">
                <input
                  placeholder="Experience"
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className=" mt-1 block w-full border p-2"
                />
              </div>
              <div className="flex-between mb-4 w-full sm:w-full lg:w-full">
                <textarea
                  placeholder="Message"
                  id="form-message"
                  required
                  name="message"
                  rows={5}
                  className=" mt-1 block w-full border p-2"
                />
              </div>
            </div>
            <div className="px-6 text-center sm:px-6 lg:px-0">
              <button
                className="brand-gradient  rounded px-6 py-3 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
