// src/components/ProjectGallery.jsx
import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Park Protectors",
    image: "/ParkProtectors.png",
    path: "/projects/park-protectors",
  },
  {
    title: "Stonewall",
    image: "/Stonewall.png",
    path: "/projects/stonewall",
  },
  {
    title: "Wicked Problem",
    image: "/wickedProblem.png",
    path: "/projects/wicked-problem",
  },
];

export default function ProjectGallery() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-[#1C1C1C] text-center mb-16">
        Featured Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Link
          to={project.path}
          key={project.title}
          className="group flex flex-col items-center text-center bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-3xl p-6 shadow-md hover:shadow-[0_0_20px_#F266AB] transform hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F266AB] transition">
            {project.title}
          </h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-contain rounded-xl mb-4"
          />
          <p className="text-sm text-gray-300">
            Click to view the process →
          </p>
        </Link>
        
        ))}
      </div>
    </section>
  );
}
