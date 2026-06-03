import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-medium mb-4">
            Research Intern @ IIIT Kottayam
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm
            <span className="block text-blue-500">
              Rashad Shaik
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mt-6">
            Full Stack Developer & Problem Solver
          </p>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-2xl">
            I build scalable web applications, explore research-driven
            solutions, and enjoy solving complex problems through
            software engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-900 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

       {/* Right Side */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <div className="relative">
  <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full"></div>

  <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
    <img
      src={profile}
      alt="Rashad Shaik"
      className="w-full h-full object-cover object-[50%_35%]"
    />
  </div>
</div>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;