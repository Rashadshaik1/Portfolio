import Reveal from "./Reveal";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Programming",
      skills: ["Java", "C", "DSA"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills">
    <section className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32">
      <h2 className="text-4xl font-bold mb-12">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Skills;