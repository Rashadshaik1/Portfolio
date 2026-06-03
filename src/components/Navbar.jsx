import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl px-6 py-4">

          {/* Logo */}

          {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
          <h1 className="text-xl font-bold tracking-wide">
            Rashad
          </h1> 
          

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm text-zinc-300">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="Yhttps://github.com/Rashadshaik1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/rashadshaik1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="/Rashad_résumé.pdf"
              download
              className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-6">

            <div className="flex flex-col gap-4">

              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

              <div className="flex gap-4 pt-2">
                <FaGithub size={22} />
                <FaLinkedin size={22} />
              </div>

              <a
                href="/resume.pdf"
                download
                className="bg-white text-black px-4 py-2 rounded-lg text-center"
              >
                Resume
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
