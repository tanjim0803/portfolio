import { Blocks, ServerCog, PanelsTopLeft } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="main-container">
      <div className="space-y-4">
        <h4 className="sub-heading">features</h4>
        <h2 className="text-lightn">What I Do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 justify-center items-center">
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4 h-full flex flex-col">
          <Blocks className="size-12 text-primary" />
          <h4 className="text-lightn mt-6 font-poppins">
            Scalable Web Applications
          </h4>
          <p className="text-lightn  font-poppins">
            I build production-ready web applications that combine clean
            interfaces, powerful APIs, and reliable database architecture.
          </p>
        </div>
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4 h-full flex flex-col">
          <ServerCog className="size-12 text-primary  font-poppins" />
          <h4 className="text-lightn mt-6  font-poppins">
            Backend Engineering
          </h4>
          <p className="text-lightn">
            I design robust APIs and backend systems with FastAPI, PostgreSQL,
            Redis, and modern Python practices.
          </p>
        </div>
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4 h-full flex flex-col">
          <PanelsTopLeft className="size-12 text-primary  font-poppins" />
          <h4 className="text-lightn mt-6  font-poppins">
            Modern User Experiences
          </h4>
          <p className="text-lightn">
            I turn ideas into responsive, intuitive interfaces using React,
            Next.js, Tailwind CSS, and Redux.
          </p>
        </div>
      </div>
    </section>
  );
}
