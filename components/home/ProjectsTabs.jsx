import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data matching your design
const projectsData = [
  {
    id: 1,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "SLATO – An Interactive EdTech Platform",
    image:
      "/assets/projects/SLATO-EXAMS.jpg",
    link: "https://slatoapp.com/",
  },
  {
    id: 2,
    category: "wordpress",
    tagLabel: "Krishworks Tech",
    title: "Krishworks Technology Innovations – An End-to-End IoT and Product Engineering Company",
    image:
      "/assets/projects/krishworks-tech.jpg",
    link: "https://krishworkstech.com/",
  },
  {
    id: 3,
    category: "wordpress",
    tagLabel: "Unuh",
    title: "UNUH – A Gamified Mobile Learning Platform",
    image:
      "/assets/projects/UNUH.jpg",
    link: "https://krishworkstech.com/projects/scorm-based-lms-for-personal-development/",
  },
  {
    id: 4,
    category: "wordpress",
    tagLabel: "Krishworks Ed-Tech",
    title: "Krishworks – An EdTech Organization Transforming Rural Education",
    image:
      "/assets/projects/krishworksh-edtech.jpg",
    link: "https://krishworks.com/",
  },
  {
    id: 6,
    category: "wordpress",
    tagLabel: "SyTrak",
    title: "SYTRAK RTLS – An Industrial IoT and Real-Time Location Tracking Platform",
    image:
      "/assets/projects/sytrak.jpg",
    link: "https://sytrak.com/",
  },
  {
    id: 7,
    category: "react",
    tagLabel: "MFGWorkx",
    title: "USA Job Board – A Job Search Platform Helping Job Seekers",
    image:
      "/assets/projects/MFG-Worx.jpg",
    link: "https://krishworkstech.com/projects/job-portal-for-blue-collar-workers/",
  },
  {
    id: 8,
    category: "react",
    tagLabel: "EnvisionNext",
    title: "NFT Dashboard Application Development.",
    image:
      "/assets/projects/Envision.jpg",
    link: "https://krishworkstech.com/projects/crm-app-for-real-estate/",
  },
  {
    id: 9,
    category: "react",
    tagLabel: "RE2",
    title: "NFT Dashboard Application Development.",
    image:
      "/assets/projects/RE2.jpg",
    link: "https://krishworkstech.com/projects/attendance-tracking-app/",
  },
  {
    id: 10,
    category: "react",
    tagLabel: "Al-Ghaith",
    title: "LMS for Al-Ghaith – A Bilingual Corporate Learning Management System",
    image:
      "/assets/projects/Al-Ghaith.jpg",
    link: "https://krishworkstech.com/projects/lms-for-training-progress-tracking/",
  },
  {
    id: 11,
    category: "react",
    tagLabel: "Digital Vidya",
    title: "Digital Vidya – A Mobile-Based Digital Marketing Learning Management System",
    image:
      "/assets/projects/Digital-vidya.webp",
    link: "https://krishworkstech.com/projects/lms-for-digital-marketing/",
  },
  {
    id: 12,
    category: "react",
    tagLabel: "Dorabhai",
    title: "Dorabhai – A Digital Food Delivery Platform Connecting Customers with Local Restaurants",
    image:
      "/assets/projects/Dorabhai.jpg",
    link: "https://krishworkstech.com/projects/selfstudy-app-for-college-students/",
  },
  {
    id: 13,
    category: "nextjs",
    tagLabel: "BlackDiamond EA",
    title: "BlackDiamond EA – An AI-Powered Automated Forex Trading Platform",
    image:
      "/assets/projects/blackdiamond-ea.jpg",
    link: "https://blackdiamonea.vercel.app/",
  },
];

export function ProjectsTabs() {
  return (
    <div className="w-full mt-15">
      <Tabs
        defaultValue="all"
        className="w-full mx-auto flex flex-col items-center gap-10"
      >
        {/* Navigation Tabs bar styled to match the target UI layout */}
        <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0 border-none">
          <TabsTrigger
            value="all"
            className="px-6 py-5.5 font-poppins rounded-md text-sm font-medium bg-bg-linear-2 shadow-shadow-1 text-lightn hover:text-primary transition-all data-[state=active]:bg-tertiary data-[state=active]:text-primary data-[state=active]:shadow-shadow-1 cursor-pointer duration-300 "
          >
            All Project
          </TabsTrigger>
          <TabsTrigger
            value="wordpress"
            className="px-6 py-5.5 font-poppins rounded-md text-sm font-medium bg-bg-linear-2 shadow-shadow-1 text-lightn hover:text-primary transition-all data-[state=active]:bg-tertiary data-[state=active]:text-primary data-[state=active]:shadow-shadow-1 cursor-pointer duration-300 "
          >
            WordPress
          </TabsTrigger>
          <TabsTrigger
            value="react"
            className="px-6 py-5.5 font-poppins rounded-md text-sm font-medium bg-bg-linear-2 shadow-shadow-1 text-lightn hover:text-primary transition-all data-[state=active]:bg-tertiary data-[state=active]:text-primary data-[state=active]:shadow-shadow-1 cursor-pointer duration-300 "
          >
            React
          </TabsTrigger>
          <TabsTrigger
            value="nextjs"
            className="px-6 py-5.5 font-poppins rounded-md text-sm font-medium bg-bg-linear-2 shadow-shadow-1 text-lightn hover:text-primary transition-all data-[state=active]:bg-tertiary data-[state=active]:text-primary data-[state=active]:shadow-shadow-1 cursor-pointer duration-300 "
          >
            NextJS
          </TabsTrigger>
          <TabsTrigger
            value="fastapi"
            className="px-6 py-5.5 font-poppins rounded-md text-sm font-medium bg-bg-linear-2 shadow-shadow-1 text-lightn hover:text-primary transition-all data-[state=active]:bg-tertiary data-[state=active]:text-primary data-[state=active]:shadow-shadow-1 cursor-pointer duration-300 "
          >
            FastAPI
          </TabsTrigger>
        </TabsList>

        {/* Content Tabs filtering data sets synchronously */}
        <TabsContent value="all" className="w-full mt-0 outline-none">
          <ProjectGrid items={projectsData} />
        </TabsContent>

        <TabsContent value="wordpress" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "wordpress")}
          />
        </TabsContent>

        <TabsContent value="react" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "react")}
          />
        </TabsContent>

        <TabsContent value="nextjs" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "nextjs")}
          />
        </TabsContent>

        <TabsContent value="fastapi" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "fastapi")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Sub-component for rendering the Grid item arrays
function ProjectGrid({ items }) {
  if (items.length === 0) {
    return (
      <div className="text-center text-zinc-500 py-10">
        No projects found in this category.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {items.map((project) => (
        <div
          key={project.id}
          className="bg-[#1b1c21] rounded-2xl p-6 flex flex-col group cursor-pointer border border-transparent hover:border-zinc-800 transition-all duration-300 min-h-[420px]"
        >
          {/* Top Media / Thumbnail Area */}
          <a href={project.link} target="_blank" className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#222328] flex items-center justify-center mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </a>

          {/* Details & Info Footer */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-primary font-poppins">
                {project.tagLabel}
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-100 tracking-tight leading-snug mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
