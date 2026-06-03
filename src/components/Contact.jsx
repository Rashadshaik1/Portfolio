function Contact() {
  return (
    <section id="contact">
      <section className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Feel free to connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rashadsk251@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium"
            >
              Email Me
            </a>

            <a
              href="#"
              className="border border-zinc-700 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="border border-zinc-700 px-6 py-3 rounded-xl"
            >
              GitHub
            </a>

            <a
              href="#"
              className="border border-zinc-700 px-6 py-3 rounded-xl"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Missing closing tag */}
      </section>
  );
}

export default Contact;