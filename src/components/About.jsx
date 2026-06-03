import Reveal from "./Reveal";

function About() {
  const strengths = [
    {
      title: "Problem Solving",
      description:
        "Applying structured thinking and Data Structures & Algorithms to solve complex challenges.",
    },
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications from frontend interfaces to backend systems.",
    },
    {
      title: "Research & Innovation",
      description:
        "Exploring new technologies and research-driven approaches to real-world problems.",
    },
    {
      title: "Team Co-ordination",
      description:
        "Working with teams, collaborating effectively, and delivering impactful project outcomes.",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm Rashad Shaik, an Information Technology undergraduate at
              Gayatri Vidya Parishad College of Engineering(A).

              <br /><br />

              I enjoy building full-stack applications,
              solving algorithmic problems, and exploring how
              technology can create meaningful impact.

              <br /><br />

              My interests include web development,
              system design, cloud technologies, and
              research-driven innovation.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-4">

            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;
