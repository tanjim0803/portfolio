import { ProjectsTabs } from "./ProjectsTabs";

export default function Projects() {
  return (
    <section id="projects" className="main-container">
      <div className="space-y-4 text-center">
        <h4 className="sub-heading">
          Visit my portfolio projects and keep your feedback
        </h4>
        <h2 className="text-lightn">My Projects</h2>
      </div>

      <ProjectsTabs />
    </section>
  );
}
