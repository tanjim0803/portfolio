import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Lock, Info, Grid, ExternalLink } from "lucide-react"; // Using lucide-react for matching layout icons

// Mock Data matching your design
const projectsData = [
  {
    id: 1,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    category: "wordpress",
    tagLabel: "SlatoApp",
    title: "NFT Dashboard Application Development.",
    likes: "1803",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
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
            items={projectsData.filter((p) => p.category === "external")}
          />
        </TabsContent>

        <TabsContent value="react" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "gallery")}
          />
        </TabsContent>

        <TabsContent value="nextjs" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "image")}
          />
        </TabsContent>

        <TabsContent value="fastapi" className="w-full mt-0 outline-none">
          <ProjectGrid
            items={projectsData.filter((p) => p.category === "standard")}
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
          className="bg-[#1b1c21] rounded-2xl p-6 flex flex-col justify-between group cursor-pointer border border-transparent hover:border-zinc-800 transition-all duration-300 min-h-[420px]"
        >
          {/* Top Media / Thumbnail Area */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#222328] flex items-center justify-center mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details & Info Footer */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-primary font-poppins">
                {project.tagLabel}
                {", "}
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
