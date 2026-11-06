"use client";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FiDownload, FiLinkedin } from "react-icons/fi";
import { SiFastapi, SiPostgresql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import AnimatedText from "./AnimatedText";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LandingSection() {
  return (
    <section
      id="home"
      className="pt-30 lg:pt-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      <div className="main-container flex flex-col lg:flex-row justify-between items-end gap-30">
        <div className="w-full lg:w-[60%]">
          <h5 className="uppercase text-lightn">full-stack web developer</h5>
          <h1 className="text-white my-5">
            Hi, {"I'am"} <span className="text-primary">Omar Faruq</span>
          </h1>
          <AnimatedText />
          <p className="text-lightn mt-6 leading-7 font-poppins">
            {"I'm"} a Software Engineer with 4+ years of industry experience,
            specializing in FastAPI, React.js, Next.js, and WordPress. I build
            scalable, high-performance web applications with clean architecture
            and seamless user experiences.
          </p>

          <Button
            size="sm"
            className="mt-10 text-primary bg-background-color-2 hover:bg-transparent font-montserrat font-semibold tracking-wider shadow-shadow-1 p-6 rounded-lg uppercase text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <FiDownload /> Download Resume
          </Button>

          <div className="flex gap-5 flex-col md:flex-row md:justify-between md:items-center mt-10">
            <div>
              <h5 className="text-lightn uppercase text-sm font-light font-poppins tracking-widest">
                find with me
              </h5>
              <div className="flex lg:justify-between items-center gap-8 mt-5">
                <Link
                  href={"https://www.linkedin.com/in/tanjim0803/"}
                  target="_blank"
                  className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300"
                >
                  <FiLinkedin className="size-8 text-white" />
                </Link>
                <Link
                  href={"https://t.me/tanjim0803"}
                  target="_blank"
                  className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300"
                >
                  <FaTelegramPlane className="size-8 text-white" />
                </Link>
                <Link
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tanjimahmed1905@gmail.com"
                  }
                  target="_blank"
                  className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300"
                >
                  <MdOutlineEmail className="size-8 text-white" />
                </Link>
              </div>
            </div>
            <div>
              <h5 className="text-lightn uppercase text-sm font-light font-poppins tracking-widest">
                best skill on
              </h5>
              <div className="flex lg:justify-between items-center gap-8 mt-5">
                <div className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <RiNextjsLine className="size-8 text-white" />
                </div>
                <div className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <SiFastapi className="size-8 text-white" />
                </div>
                <div className="bg-background-color-2 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <SiPostgresql className="size-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] relative">
          <div className="h-[400px] md:h-[450px] w-full bg-background-color-2 shadow-shadow-1 relative rounded-sm"></div>
          <Image
            className="absolute left-0 md:left-[23%] lg:left-1 bottom-0 z-10"
            src="/assets/images/md-omar-faruq-updated.webp"
            width={420}
            height={570}
            alt="MD. Omar Faruq"
          />
        </div>
      </div>
    </section>
  );
}
