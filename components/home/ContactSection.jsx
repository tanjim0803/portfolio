"use client";

import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-5xl items-start">
          {/* Left Column: Personal Info Card (Takes 2 layout spans) */}
          <div className="lg:col-span-2 bg-[#1e2024] p-8 rounded-2xl shadow-xl border border-transparent hover:border-zinc-800/50 transition-all duration-300 group w-full">
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#222328]">
              <img
                src="/assets/images/contact-img.webp" // Placeholder shaking hands photo matching the theme
                alt="Contact Image"
                className="w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-3xl font-bold text-zinc-100 tracking-tight">
                  MD. Omar Faruq
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Software Engineer
                </p>
              </div>

              <p className="text-zinc-400 text-base leading-relaxed font-light mt-2">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>

              <div className="flex flex-col gap-1 text-sm text-zinc-400 font-light mt-2">
                <p>
                  Phone:{" "}
                  <span className="text-zinc-200 font-normal hover:text-primary transition-colors cursor-pointer">
                    +012 345 678 90
                  </span>
                </p>
                <p>
                  Email:{" "}
                  <span className="text-zinc-200 font-normal hover:text-primary transition-colors cursor-pointer">
                    admin@example.com
                  </span>
                </p>
              </div>

              {/* Social Channels Media Block */}
              <div className="mt-6">
                <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase block mb-4">
                  Find With Me
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#141518] shadow-md hover:bg-[#1a1c20] hover:-translate-y-1 transition-all rounded-xl flex items-center justify-center text-zinc-300 hover:text-primary"
                  >
                    <SlSocialFacebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#141518] shadow-md hover:bg-[#1a1c20] hover:-translate-y-1 transition-all rounded-xl flex items-center justify-center text-zinc-300 hover:text-primary"
                  >
                    <FaReact className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#141518] shadow-md hover:bg-[#1a1c20] hover:-translate-y-1 transition-all rounded-xl flex items-center justify-center text-zinc-300 hover:text-primary"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container (Takes 3 layout spans) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#1e2024] p-8 rounded-2xl shadow-xl border border-transparent w-full flex flex-col gap-6"
          >
            {/* Inline Name and Phone inputs row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141518] border-2 border-[#191b1f] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition-colors shadow-inner text-zinc-100"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#141518] border-2 border-[#191b1f] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition-colors shadow-inner text-zinc-100"
                />
              </div>
            </div>

            {/* Email Field Container */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#141518] border-2 border-[#191b1f] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition-colors shadow-inner text-zinc-100"
              />
            </div>

            {/* Subject Field Container */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#141518] border-2 border-[#191b1f] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition-colors shadow-inner text-zinc-100"
              />
            </div>

            {/* Message Textarea Container */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#141518] border-2 border-[#191b1f] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition-colors shadow-inner text-zinc-100 resize-none"
              ></textarea>
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#141518] shadow-md hover:bg-[#1a1c20] hover:-translate-y-0.5 text-zinc-400 hover:text-primary border border-zinc-900/60 rounded-xl py-4 text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 mt-2"
            >
              Send Message
              <FaXTwitter className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
