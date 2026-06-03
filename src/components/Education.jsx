import Reveal from "./Reveal";

function Education() {
  return (
    <section id="education">
      <section className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32">
        <h2 className="text-4xl font-bold mb-12">
          Education
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <p className="text-blue-500 text-sm mb-2">
            2024 - 2028
          </p>

          <h3 className="text-2xl font-bold">
            B.Tech in Information Technology
          </h3>

          <p className="text-zinc-400 mt-2">
            Gayatri Vidya Parishad College of Engineering
          </p>

          {/* <div className="mt-6 inline-flex px-4 py-2 bg-zinc-800 rounded-full">
            CGPA: 8.94
          </div> */}
        </div>
      </section>

      {/* Missing closing tag */}
    </section>
  );
}

export default Education;