const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ReactJS", "NextJS", "FastAPI", "Redux", "Tailwind CSS", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "WordPress",
      "Elementor",
      "GitHub",
      "Postman",
      "Firebase",
      "Docker",
      "Alembic",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <div className="space-y-10">
        {/* Skill Categories */}
        {skillCategories.map((category) => (
          <div key={category.title}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-primary" />

              <h5 className="font-poppins font-semibold text-lightn">
                {category.title}
              </h5>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-poppins text-base text-body md:text-lg">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md
                      bg-tertiary
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-lightn
                      shadow-inner-shadow
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:text-primary
                      hover:shadow-inner-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
