import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../../components/AppButton";
import emailjs from "emailjs-com";

function SendMessage() {
  const [status, setStatus] = useState("");       // success or error text
  const [loading, setLoading] = useState(false);  // loading indicator

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");      // reset previous messages
    setLoading(true);   // set loading

    emailjs
      .sendForm(
        "service_qjymnbb",
        "template_syjsn7e",
        e.target,
        "osuimBTSD9K8S4zRP"
      )
      .then(() => {
        setStatus("Message sent successfully!");   // success UI
        setLoading(false);
        e.target.reset();                         // optional: clear fields
      })
      .catch(() => {
        setStatus("Failed to send the message. Please try again."); // error UI
        setLoading(false);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 md:w-[420px] w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
            name="message"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black resize-none"
          />

          {/* Button with Loading State */}
          <AppButton
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            className="flex justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </AppButton>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm mt-2 ${
                status.startsWith("Message sent")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
