import Reveal from "./Reveal";

function Achievements() {
  const achievements = [
    {
      title: "Amaravathi Quantum Valley Hackathon",
      description:
        "Led a team and participated in solving real-world technology challenges.",
    },
    {
      title: "300+ DSA Problems Solved",
      description:
        "Solved 300+ coding problems on LeetCode covering arrays, trees, graphs, dynamic programming and more.",
    },
  ];

  return (
    <section id="achievements">
    <section className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32">
      <h2 className="text-4xl font-bold mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Achievements;