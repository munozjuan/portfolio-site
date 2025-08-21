import FadeWrapper from "../components/FadeWrapper";

export default function Stonewall() {
  const highlights = [
    { img: "wireframes.png", label: "Wireframes" },
    { img: "palette.png", label: "Color Palette" },
    { img: "mockups.png", label: "Mid-Fidelity Mockups" },
    { img: "prototype.png", label: "Final Prototype" },
  ];

  // Figma prototype URL (re-used for hero + bottom CTA)
  const figmaHref =
    "https://www.figma.com/proto/goq1ydeQjF5G1CAFCoQGks/M15-Stonewall?node-id=150-631&t=GxVYayFwiL7txwQo-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=150%3A631";

  return (
    <FadeWrapper>
      {/* HERO */}
      <section className="relative bg-[#1C1C1C] text-white pt-28 pb-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_2px_6px_#FFA62966]">
          Stonewall Columbus Redesign
        </h1>
        <p className="text-md sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Inclusive redesign focused on accessibility, community, and clarity — transforming Stonewall Columbus into a welcoming digital hub.
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
            src="/stonewall-demo.gif"
            alt="Stonewall Redesign Demo"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          {/* hover overlay CTA */}
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
              The previous Stonewall Columbus website lacked visual harmony and accessibility — pixelated images, overwhelming navigation, and inconsistent content organization hindered user engagement and donations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">The Goals</h2>
            <p className="text-gray-300 leading-relaxed">
              Simplify the user journey, create a modern and sleek aesthetic, ensure accessibility, and provide clear pathways for events, resources, and donations — all while maintaining an inclusive tone.
            </p>
          </div>
        </div>
      </section>

      {/* INFO ARCHITECTURE */}
      <section className="bg-[#1C1C1C] px-4 sm:px-8 py-20 text-white">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] mb-12">
          Information Architecture
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-[#FFA629] mb-4">Old Navigation</h3>
            <img src="/old-nav.png" alt="Old Nav" className="rounded-lg mb-4" />
            <p className="text-sm text-gray-300">Cluttered, redundant links with unclear hierarchy.</p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-[#F266AB] mb-4">New Navigation</h3>
            <img src="/new-nav.png" alt="New Nav" className="rounded-lg mb-4" />
            <p className="text-sm text-gray-300">Streamlined structure with three key sections and clear CTA placement.</p>
          </div>
        </div>
      </section>

      {/* PROCESS HIGHLIGHTS */}
      <section className="bg-[#1C1C1C] px-4 sm:px-8 pb-24 text-white">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] mb-12">
          Process Highlights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-sm text-gray-300 mt-2">Exploration and refinement phases</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </FadeWrapper>
  );
}
