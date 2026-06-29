import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineCard from "./TimelineCard";

// Mock structured data mimicking the image content
const educationData = [
  {
    id: "edu-1",
    title: "BSc in Computer Science",
    subtitle: "University of DVI (2006 - 2010)",
    badge: "3.90/4",
    description:
      "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
    id: "edu-2",
    title: "AS - Science & Information",
    subtitle: "SuperKing College (2001 - 2005)",
    badge: "4.75/5",
    description:
      "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
  },
];

const experienceData = [
  {
    id: "exp-1",
    title: "Sr. Software Engineer",
    subtitle: "Google Out Tech - (2017 - Present)",
    badge: "USA",
    description:
      "Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
  },
  {
    id: "exp-2",
    title: "Web Developer & Trainer",
    subtitle: "Apple Developer Team - (2012 - 2016)",
    badge: "MALAYSIA",
    description:
      "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy.",
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
          <TabsList className="w-full shadow-shadow-1 bg-background-color-2 rounded-lg grid grid-cols-2 md:grid-cols-3 min-h-24 p-0">
            <TabsTrigger
              value="education"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Professional Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="font-poppins py-8 cursor-pointer text-lightn rounded-lg text-lg font-semibold transition-all bg-transparent data-[state=active]:bg-background-color-2 data-[state=active]:text-primary hover:text-primary  data-[state=active]:shadow-shadow-1  hover:shadow-shadow-1"
            >
              Experience
            </TabsTrigger>
          </TabsList>

          {/* Education & Experience Split Grid View */}
          <TabsContent value="education" className="w-full mt-0 outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {/* Left Column: Education Timeline */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 pl-6">
                  <span className="font-poppins text-xs font-bold tracking-wider text-primary">
                    1998 - 2010
                  </span>
                  <h3 className="text-3xl font-bold text-zinc-100">
                    Education Quality
                  </h3>
                </div>

                <div className="relative border-l-4 border-[#141518] flex flex-col gap-10 pl-6 ml-2">
                  {educationData.map((item) => (
                    <TimelineCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Right Column: Job Experience Timeline */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 pl-6">
                  <span className="text-xs font-bold tracking-wider text-primary">
                    2010 - 2022
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
            </div>
          </TabsContent>

          {/* Fallback layout containers for inactive tabs */}
          <TabsContent
            value="skills"
            className="w-full text-center text-zinc-500 py-12"
          >
            Professional Skills layout details content goes here.
          </TabsContent>
          <TabsContent
            value="experience"
            className="w-full text-center text-zinc-500 py-12"
          >
            Detailed experience view standalone content goes here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
