import FadeWrapper from "../components/FadeWrapper";


export default function ParkProtectors() {
  return (
    <FadeWrapper>
      {/* Title + Summary + Mint Waves */}
      <section className="relative bg-[#1C1C1C] text-white pt-28 pb-10 px-4 sm:px-8 overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#F266AB]">
            Park Protectors: UX/UI Case Study
          </h1>
          <p className="text-md sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A digital platform empowering users to explore and protect America’s National Parks —
            built with React, Tailwind, and a passion for nature.
          </p>
        </div>
      </section>
  
   


      

      {/* Problem & Solution Section */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              People residing within the United States love our national & state parks but are not
              sure how to organize volunteer opportunities or take care of our parks.
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <img
              src="/parkLogo.png"
              alt="Park Protectors Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">Our Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              “Park Protectors” aims to support users in supporting state and national parks within
              the U.S.! Whether it’s through donations, volunteer work, or conservation; “Park
              Protectors” will be a hub to help you find the information you need to help!
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-[#f4f9f2] py-16 px-6 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#4d7417] mb-8">Research</h2>

          {/* Personas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow p-6">
              <img src="/prodpersona2.png" alt="Persona 1" className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Persona: Alex Torres</h3>
              <p className="text-sm text-gray-600">
                27 years old | Outdoor adventure photographer & travel blogger
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <img src="/prodpersona1.png" alt="Persona 2" className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Persona: Lana Gardner</h3>
              <p className="text-sm text-gray-600">35 years old | Park Ranger</p>
            </div>
          </div>

          {/* Interview Plan */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Interview Plan</h3>
            <p className="mb-4 text-gray-700">
              We conducted 5 interviews (4 volunteers, 1 seasonal park employee) and a survey to
              better understand our users' motivations, barriers, and needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Patron */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Patron Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>What motivates you to volunteer?</li>
                  <li>What online platforms do you use?</li>
                  <li>Would you donate or volunteer?</li>
                  <li>What tools would help you take action?</li>
                </ul>
              </div>
              {/* Stakeholder */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Stakeholder Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>How do you promote engagement?</li>
                  <li>What platforms and tools do you use?</li>
                  <li>What age groups volunteer the most?</li>
                </ul>
              </div>
              {/* Survey */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Survey Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Favorite park visited?</li>
                  <li>How do you receive park news?</li>
                  <li>Would a hub be helpful?</li>
                  <li>Volunteer interests/tools?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interview Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Interview Results</h3>
            <p className="text-gray-700 mb-4">
              Interviews revealed a desire for a centralized hub for park involvement. Most people
              used social media and email for updates. Many faced time and information barriers.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>“I wish there was a hub for volunteer work—like a job board.”</li>
              <li>“I get nervous volunteering if I don’t know what to expect.”</li>
              <li>“I follow causes through newsletters, social media, or Reddit.”</li>
              <li>“Training times conflict with my work schedule.”</li>
            </ul>
          </div>
        </div>
      </section> {/* ✅ FIXED: closed the missing section here */}


      {/* Empathy Map & Persona Breakdown */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-[#4d7417] mb-4">User Persona: Desiree Henriott</h3>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Persona Card */}
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/personaDesiree.png"
          alt="Desiree Henriott"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold">Desiree Henriott</h4>
          <p className="text-sm text-gray-600">
            25 years old · Graduate Student in Biology · Athens, OH
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Desiree is an adventurous grad student passionate about supporting local parks. She frequents
        both state and national parks in Ohio. Her biggest struggle is knowing when and where to
        volunteer. She wants an easier way to get involved and stay informed.
      </p>
    </div>

    {/* Empathy Map Summary */}
    <div className="bg-white rounded-2xl shadow p-6">
      <h4 className="text-lg font-semibold text-[#4d7417] mb-2">Empathy Map Highlights</h4>
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        <li><strong>Does:</strong> Volunteers weekly, follows park content on social.</li>
        <li><strong>Says:</strong> “Volunteering is a great way to give back.”</li>
        <li><strong>Thinks:</strong> Wishes there was a hub for volunteer opportunities.</li>
        <li><strong>Feels:</strong> Frustrated by social media algorithms, has some anxiety about outreach.</li>
      </ul>
    </div>
  </div>
</div>

{/* Value Proposition */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Value Proposition</h3>
  <div className="bg-white rounded-2xl shadow p-6">
  <div className="flex justify-center">
  <img
    src="/valueProposition.png"
    alt="Value Proposition Diagram"
    className="max-w-[900px] w-full h-auto rounded-lg shadow"
  />
</div>

    <p className="text-gray-700 text-sm mt-4">
      This chart maps user needs, wants, and fears to the features, benefits, and experiences Park Protectors provides.
      It also highlights how our platform stands apart from existing alternatives like social media or individual park websites.
    </p>
  </div>
</div>

{/* Ideate: Problem Statement */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Problem Statement</h3>
  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-gray-800 leading-relaxed">
      We believe that by providing a simpler way to make donations or volunteer at National and State Parks,
      we will not only increase traffic and engagement for these parks, but also help users feel a sense of accomplishment
      and pride in knowing they're protecting these natural spaces for future generations.
    </p>
  </div>
</div>


      {/* Design Section */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F266AB] mb-6">Design</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            I created mood boards, color palettes, and wireframes in Figma. The final UI was
            implemented with React and TailwindCSS for a modern, responsive experience.
          </p>
        </div>
      </section>

      {/* Hero Image in Bento Box */}
      <section className="bg-[#1C1C1C] px-4 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-[#2A2A2A]">
          <img
            src="/park1.png"
            alt="Park Protectors Screenshot"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Site Highlights Section */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#F266AB] mb-12">Site Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: "HomepageheroPark.png", label: "Homepage Hero Section" },
              { img: "volunteerPark.png", label: "Volunteer Signup Form" },
              { img: "donatePark.png", label: "Donation Experience" },
              { img: "contactPark.png", label: "Contact Form" },
              { img: "newsPark.png", label: "Live News from NPS API" },
              { img: "mapPark.png", label: "National Parks Map Feature" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg">
                <img src={`/${item.img}`} alt={item.label} className="w-full h-auto object-contain" />
                <p className="p-4 text-center text-gray-300 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Site */}
      <section className="bg-[#1C1C1C] text-white pt-10 pb-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#F266AB]">Live Site</h2>
          <a
            href="https://munozjuan.github.io/ParkProtectors/"
            target="_blank"
            rel="noreferrer"
            className="text-[#FFA629] underline text-lg"
          >
            Visit the deployed Park Protectors website →
          </a>
        </div>
      </section>
    </FadeWrapper>
  );
}
