import ResumeTabs from "./ResumeTabs";

export default function Resume() {
  return (
    <section id="resume">
      <div className="space-y-4 text-center">
        <h4 className="sub-heading">7+ Years of Experience</h4>
        <h2 className="text-lightn">My Resume</h2>
      </div>
      <ResumeTabs />
    </section>
  );
}
