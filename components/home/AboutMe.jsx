export default function AboutMe() {
  return (
    <div>
      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <div>
          <p className="font-poppins text-body text-lg leading-relaxed">
            {"I'm"} a Full-Stack Developer with 4+ years of professional
            experience and a final-year{" "}
            <span className="font-medium text-lightn">
              Computer Science and Engineering (CSE)
            </span>{" "}
            student. My core expertise is in{" "}
            <span className="font-medium text-lightn">
              Python, FastAPI, React.js, Next.js, JavaScript, and TypeScript
            </span>
            , with a strong focus on backend engineering, scalable web
            applications, and modern user experiences.
          </p>
        </div>

        {/* Journey */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-primary" />

            <h5 className="font-poppins font-semibold text-lightn">
              My Journey
            </h5>
          </div>

          <div className="space-y-4 text-base leading-8 text-body md:text-lg">
            <p>
              My journey started with a strong foundation in computer science
              and evolved through hands-on development and professional
              experience. Alongside my academic studies, I have focused on
              turning what I learn into practical, real-world software.
            </p>

            <p>
              From May 2022 to July 2026, I worked as a{" "}
              <span className="font-medium text-lightn">
                System Software Engineer at Krishworks Technology Innovation
              </span>
              . Working in a professional engineering environment helped me
              develop a deeper understanding of building, maintaining, and
              improving production-oriented applications.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-primary" />

            <h5 className="font-poppins font-semibold text-lightn">
              What I Do
            </h5>
          </div>

          <div className="space-y-4 text-base leading-8 text-body md:text-lg">
            <p>
              I enjoy building applications from end to end—from designing
              database structures and developing robust APIs to creating
              responsive, high-performance interfaces. On the backend, I
              particularly enjoy working with{" "}
              <span className="font-medium text-lightn">
                Python and FastAPI
              </span>
              , designing APIs, authentication systems, database architectures,
              and scalable application structures.
            </p>

            <p>
              On the frontend, I use{" "}
              <span className="font-medium text-lightn">
                React.js and Next.js
              </span>{" "}
              to build modern, responsive interfaces with reusable components,
              clean architecture, and a strong focus on user experience and
              performance.
            </p>
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-primary" />

            <h5 className="font-poppins font-semibold text-lightn">
              Current Focus
            </h5>
          </div>

          <p className="text-base leading-8 text-body md:text-lg">
            Alongside full-stack development, {"I'm"} currently expanding my
            expertise in{" "}
            <span className="font-medium text-lightn">
              AI Engineering, RAG systems, and AI-powered applications
            </span>
            . My goal is to combine strong software engineering fundamentals
            with emerging AI technologies to build intelligent, reliable, and
            genuinely useful software.
          </p>
        </div>
      </div>
    </div>
  );
}
