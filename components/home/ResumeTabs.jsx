import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineCard from "./TimelineCard";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

// Mock structured data mimicking the image content
const educationData = [
  {
    id: "edu-1",
    title: "BSc in Computer Science",
    subtitle: "Green University of Bangladesh (2022 - 2028)",
    badge: "2.72/4",
    description: `I'm currently pursuing my final year in Computer Science while continuously strengthening my technical expertise. I've completed courses in Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Computer Networking, Software Engineering and other core web CSE technologies, building a strong foundation for developing scalable and efficient software solutions.`,
  },
  {
    id: "edu-2",
    title: "HSC in Dept of Science",
    subtitle: "Govt Bangla College (2015-2020)",
    badge: "3.67/5",
    description: `I completed my Higher Secondary Certificate (HSC) with a focus on Mathematics, Information and Communication Technology (ICT), and other core subjects under the Bangladesh education curriculum, building a strong academic foundation in analytical thinking and problem-solving.
`,
  },
];

const experienceData = [
  {
    id: "exp-1",
    title: "System Software Engineer",
    subtitle: "Krishworks Technology Innovation - (May 2022 - July 2026)",
    badge: "India (Karnataka Bengaluru)",
    description:
      "",
  },
];

export default function ResumeTabs() {
  return (
    <div className="w-full mt-15">
      <div className="mx-auto flex flex-col items-center">
        <Tabs
          defaultValue="education"
          className="w-full flex flex-col items-center gap-16"
        >
          {/* Main Navigation Row */}
          <TabsList className="w-full shadow-shadow-1 bg-background-color-2 rounded-lg grid grid-cols-2 md:grid-cols-4 min-h-24 p-0">
            <TabsTrigger
              value="skills"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Experience
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Education
            </TabsTrigger>

            <TabsTrigger
              value="about"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              About Me
            </TabsTrigger>
          </TabsList>

          {/* Education & Experience Split Grid View */}
          <TabsContent value="education" className="w-full mt-0 outline-none">
            {/* Left Column: Education Timeline */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 pl-6">
                <h3 className="text-3xl font-bold text-zinc-100">
                  Educational Qualification
                </h3>
              </div>

              <div className="relative border-l-4 border-[#141518] flex flex-col gap-10 pl-6 ml-2">
                {educationData.map((item) => (
                  <TimelineCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Fallback layout containers for inactive tabs */}
          <TabsContent value="skills" className="w-full mt-0 outline-none">
            <div className="flex flex-col gap-8 pl-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-zinc-100">Skills</h3>
              </div>
              <div>
                <Skills />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="experience" className="w-full mt-0 outline-none">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 pl-6">
                <span className="text-xs font-bold tracking-wider text-primary">
                  2022 - 20226
                </span>
                <h3 className="text-3xl font-bold text-zinc-100">
                  Job Experience
                </h3>
              </div>

              <div className="relative border-l-4 border-[#141518] flex flex-col gap-10 pl-6 ml-2">
                {experienceData.map((item) => (
                  <TimelineCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full mt-0 outline-none">
            <div className="flex flex-col gap-8 pl-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-zinc-100">About Me</h3>
              </div>
              <div>
                <AboutMe />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
