"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      await emailjs.send(
        "service_bu69xum",
        "template_8i0dyqu",
        formData,
        "VsydYyCx9QuGkM6Xm"
      );
      alert("Message sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false)
    } catch (error) {
      alert('Message failed to send')
    }
  };

  return (
    <form
      className="w-full max-w-[900px] bg-[#191919] rounded-md  p-5 md:p-10 border-[#566265]  border"
      onSubmit={handleForm}
    >
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] gap-8 mb-8">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="p-4 rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
          className="p-4  rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="p-4 rounded-md  border-[#566265] border focus:outline-none focus:border-[#FEB273]"
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Message"
        className="rounded-md min-h-[150px] resize-none  w-full p-4  border-[#566265] border focus:outline-none focus:border-[#FEB273] mb-8"
      ></textarea>

      <button className= {`w-fit font-medium capitalize flex gap-3 pr-3 items-center border border-[#FEB273] rounded-[100px] ${isSubmitting? "opacity-40": ""} `}
      disabled = {isSubmitting}
      >
        <span
          className={`text-black bg-[#FEB273] grid place-content-center py-5 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] px-12`}
        >
          Submit
        </span>
        <span className="basis-[fit-content]">
          <img src="/arrow.svg" alt="" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
