"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const Page: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Show success dialog after sending the message
      setSent(true);
      setDialogMessage("Your message has been sent successfully.");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setDialogMessage("There was an error sending your message.");
    }
  };

  // Automatically close the dialog after a timeout
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 3000); // Close the dialog after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [sent]);
  return (
    <section className="">
      <div className="mx-auto max-w-screen-sm py-5 sm:max-w-screen-sm lg:max-w-screen-lg">
        <h1 className="h2-bold">Contact Us</h1>
      </div>
      <div className="mx-auto flex max-w-screen-sm justify-between py-10 align-top sm:max-w-screen-sm lg:max-w-screen-lg">
        <div className="h-full">
          <Image
            src="/assets/images/contact1.jpg"
            width={500}
            height={300}
            alt="group manager"
          />
        </div>
        <div className="flex flex-col ">
          <div className="mb-5 h-auto w-96 rounded-md border bg-white p-5">
            <h2 className="h2-semibold">Get in Touch with Us</h2>
            <p>We are a click away</p>
          </div>
          <div className="text-dark100_light900 background-light900_dark200 h-auto w-96 rounded-md border bg-white p-5">
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="text-dark100_light900 background-light900_dark200 mb-4">
                <label htmlFor="form-name">Name</label>
                <input
                  id="form-name"
                  autoComplete="name"
                  maxLength={50}
                  name="name"
                  className="text-dark100_light900 background-light900_dark200 mt-1 block w-full border p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="form-email">Email</label>
                <input
                  id="form-email"
                  required
                  autoComplete="email"
                  maxLength={80}
                  name="email"
                  type="email"
                  className="text-dark100_light900 background-light900_dark200 mt-1 block w-full border p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  required
                  name="message"
                  rows={5}
                  className="text-dark100_light900 background-light900_dark200 mt-1 block w-full border p-2"
                />
              </div>
              <button
                className="brand-gradient mx-auto rounded px-6 py-3 text-center text-white"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {sent && (
        <Dialog open={true}>
          <DialogContent>
            <p className="text-dark100_light900">{dialogMessage}</p>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Page;
