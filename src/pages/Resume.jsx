import FadeWrapper from "../components/FadeWrapper";

export default function Resume() {
  return (
    <FadeWrapper>
      <section className="bg-[#1C1C1C] text-white min-h-[calc(var(--vh)-80px)] px-4 sm:px-6 py-10 sm:py-14 pb-28 text-center">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB]">
          My Resume
        </h1>
        <p className="text-gray-300 mb-8">View or download my full resume below.</p>

        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg bg-[#2A2A2A] h-[80vh]">
          <iframe src="/resume.pdf" title="Resume PDF" className="w-full h-full" />
        </div>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-block mt-6 bg-[#FFA629] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#e6951f] transition">
          Download Resume
        </a>
      </section>
    </FadeWrapper>
  );
}
