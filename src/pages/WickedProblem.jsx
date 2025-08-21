import FadeWrapper from "../components/FadeWrapper";

export default function WickedProblem() {
  const highlights = [
    { img: "research.png", label: "Research & Insights" },
    { img: "ideation.png", label: "Ideation & Sketching" },
    { img: "wireframes1.png", label: "Wireframes" },
    { img: "prototype1.png", label: "High-Fidelity Prototype" },
  ];

  // Figma prototype URL (re-used for hero + bottom CTA)
  const figmaHref =
    "https://www.figma.com/proto/f4vJ84kLQeoC6wodB8Ji1r/WickedProblem?node-id=70-38&node-type=frame&t=Hszp61vW4fRDkyAv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1";

  return (
    <FadeWrapper>
      {/* HERO */}
      <section className="relative bg-[#1C1C1C] text-white pt-28 pb-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_2px_6px_#FFA62966]">
          Wicked Problem — TRPN
        </h1>
        <p className="text-md sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Tackling complex transportation challenges with user-centered solutions — exploring accessibility, sustainability, and community-driven impact.
        </p>

        {/* Clickable hero → Figma prototype */}
        <a
          href={figmaHref}
          target="_blank"
          rel="noreferrer"
          className="group block max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#2A2A2A] relative"
          aria-label="Open Figma Prototype"
        >
          <img
            src="/wicked-demo.png"
            alt="Wicked Problem Demo"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="pointer-events-none absolute bottom-4 right-4 px-3 py-1.5 text-sm rounded-lg bg-[#FFA629] text-[#1C1C1C] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
            Open Figma Prototype →
          </div>
        </a>
      </section>

      {/* PROBLEM + GOALS */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              Public transportation systems often fail to meet the needs of diverse communities, creating barriers for accessibility, sustainability, and overall user experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">The Goals</h2>
            <p className="text-gray-300 leading-relaxed">
              Design an inclusive transportation solution addressing accessibility gaps, improving community trust, and creating a seamless, user-friendly experience.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS HIGHLIGHTS */}
      <section className="bg-[#1C1C1C] px-4 sm:px-8 pb-24 text-white">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] mb-12">
          Process Highlights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden bg-[#2A2A2A] shadow-lg transition transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-48 bg-[#1C1C1C]">
                <img
                  src={`/${item.img}`}
                  alt={item.label}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                <p className="text-lg font-semibold text-[#FFA629]">{item.label}</p>
                <p className="text-sm text-gray-300 mt-2">Key step in the UX process</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </FadeWrapper>
  );
}
