import React from "react";
import ContactInfo from "./ContactInfo";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <section className="w-full px-5 py-16 flex flex-col items-center bg-gray-200">
      <h2 className="text-4xl font-semibold">
        Get In{" "}
        <span className="gradient-text sm:grayscale-100 sm:hover:grayscale-0  ">
          Touch
        </span>
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-xl">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, feel free to reach out!
      </p>

      <div className="mt-12 flex flex-col justify-center md:flex-row gap-10 w-full">
        <ContactInfo />
        <SendMessage />
      </div>
    </section>
  );
};

export default Contact;
