"use client";

import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle submission logic here
  };

  return (
    <div className="w-full mt-15">
      <div className="flex flex-col items-center">
        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full items-start">
          {/* Left Column: Personal Info Card (Takes 2 layout spans) */}
          <div className="lg:col-span-2 bg-[#1e2024] p-8 rounded-2xl shadow-shadow-1 border border-transparent hover:border-zinc-800/50 transition-all duration-300 group w-full">
            <div className="w-full aspect-16/10 rounded-xl overflow-hidden mb-6 bg-[#222328]">
              <Image
                src="/assets/images/contact-img.webp" // Placeholder shaking hands photo matching the theme
                alt="Contact Image"
                className="w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                width={500}
                height={500}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-3xl font-bold text-lightn tracking-tight">
                  MD. Omar Faruq
                </h3>
                <p className="text-body text-lg font-poppins mt-1">Software Engineer</p>
              </div>

              <p className="text-body text-lg leading-relaxed font-light font-poppins mt-2">
                I am open to work any freelance project. Please connect with me via email, call or social accounts.
              </p>

              <div className="flex flex-col gap-1 text-body text-lg font-poppins font-light mt-2">
                <p>
                  Phone:{" "}
                  <span className="text-lightn font-normal hover:text-primary transition-colors cursor-pointer">
                    +8801671407312
                  </span>
                </p>
                <p>
                  Email:{" "}
                  <span className="font-poppins text-lightn font-normal hover:text-primary transition-colors cursor-pointer">
                    tanjimahmed1905@gmail.com
                  </span>
                </p>
              </div>

              {/* Social Channels Media Block */}
              <div className="mt-6">
                <h6 className="text-body font-light uppercase mb-4">
                  Find With Me
                </h6>
                <div className="flex items-center gap-8 mt-5">
                  <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                    <SlSocialFacebook className="size-7 text-white" />
                  </div>
                  <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                    <FaXTwitter className="size-7 text-white" />
                  </div>
                  <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                    <FiLinkedin className="size-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container (Takes 3 layout spans) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#1e2024] p-8 rounded-2xl shadow-shadow-1 border border-transparent w-full flex flex-col gap-7"
          >
            {/* Inline Name and Phone inputs row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="text-xs font-semibold tracking-wider text-body uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191b1e] border-2 border-[#191b1f] rounded-md p-4 text-body focus:outline-none focus:border-primary/40 transition-colors shadow-inner-shadow"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs font-semibold tracking-wider text-body uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#191b1e] border-2 border-[#191b1f] rounded-md p-4 text-body focus:outline-none focus:border-primary/40 transition-colors shadow-inner-shadow"
                />
              </div>
            </div>

            {/* Email Field Container */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-semibold tracking-wider text-body uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#191b1e] border-2 border-[#191b1f] rounded-md p-4 text-body focus:outline-none focus:border-primary/40 transition-colors shadow-inner-shadow"
              />
            </div>

            {/* Subject Field Container */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-semibold tracking-wider text-body uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#191b1e] border-2 border-[#191b1f] rounded-md p-4 text-body focus:outline-none focus:border-primary/40 transition-colors shadow-inner-shadow"
              />
            </div>

            {/* Message Textarea Container */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-semibold tracking-wider text-body uppercase">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#191b1e] border-2 border-[#191b1f] rounded-md p-4 text-body focus:outline-none focus:border-primary/40 transition-colors shadow-inner-shadow"
              ></textarea>
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#191b1e] hover:bg-[#1a1c20] hover:-translate-y-0.5 text-body hover:text-primary border border-zinc-900/60 rounded-md py-6 text-xs font-semibold tracking-widest uppercase transition-all mt-2 shadow-shadow-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
