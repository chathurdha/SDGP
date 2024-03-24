import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import contactUs from "/src/assets/contactUs.jpg"

function ContactUs() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tqbd313", "template_fyluh2a", form.current, {
        publicKey: "W2-q3M6aXcLKThljp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSuccessMessage("");
          }, 15000); // Hide the success message after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-auto w-screen">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md pl-20 w-[70%] my-[10%]"
        >
          {/* First Column */}
          <div className="pr-20 py-10">
            <h1 className="font-semibold text-2xl mb-6">Ask your Questions?</h1>
            <label className="text-[#4B5563]">Name</label>
            <input
              type="text"
              name="user_name"
              className="mt-3 mb-3 block w-full rounded-md bg-[#F7F7FA] shadow-sm p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mt-4 text-[#4B5563]">Email</label>
            <input
              type="email"
              name="user_email"
              className="mt-3 mb-3 block w-full rounded-md bg-[#F7F7FA] shadow-sm p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-4 text-[#4B5563]">Message</label>
            <textarea
              name="message"
              className="mt-3 mb-3 block w-full rounded-md bg-[#F7F7FA] shadow-sm p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-7 rounded text-sm font-saira mt-5"
            >
              Send
            </button>
            {successMessage && (
              <p className="my-3 text-custom-purple">{successMessage}</p>
            )}
          </div>

          {/* Second Column */}
          <div className="hidden md:block">
            <img
              src={contactUs}
              alt="Image"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
