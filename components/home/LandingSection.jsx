"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiFastapi } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import AnimatedText from "./AnimatedText";

export default function LandingSection() {
  return (
    <section className="mt-25">
      <div className="flex justify-between items-center gap-30">
        <div className="w-[60%]">
          <h5 className="uppercase text-lightn">welcome to my world</h5>
          <h1 className="text-white my-5">
            Hi, {"I'am"} <span className="text-primary">MD. Omar Faruq</span>
          </h1>
          <AnimatedText />
          <p className="text-lightn mt-6 leading-7 font-poppins">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="flex justify-between items-center mt-20">
            <div>
              <h5 className="text-lightn uppercase text-sm font-light">
                find with me
              </h5>
              <div className="flex justify-between items-center gap-8 mt-5">
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <SlSocialFacebook className="size-8 text-white" />
                </div>
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <FaXTwitter className="size-8 text-white" />
                </div>
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <FiLinkedin className="size-8 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lightn uppercase text-sm font-light">
                best skill on
              </h5>
              <div className="flex justify-between items-center gap-8 mt-5">
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <FaReact className="size-8 text-white" />
                </div>
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <RiNextjsLine className="size-8 text-white" />
                </div>
                <div className="bg-bg-linear-1 p-4 rounded shadow-shadow-1 cursor-pointer hover:-translate-y-1 duration-300">
                  <SiFastapi className="size-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] relative">
          <div className="h-[450px] w-full z- bg-bg-linear-1 shadow-shadow-1 relative rounded-sm"></div>
          <Image
            className="absolute bottom-0 z-10"
            src="/assets/images/md-omar-faruq-updated.png"
            width={420}
            height={570}
            alt="MD. Omar Faruq"
          />
        </div>
      </div>
    </section>
  );
}
