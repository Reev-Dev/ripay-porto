import Image from "next/image";
import React from "react";
import { ProjectsAll } from "@/constants";
import Link from "next/link";

const ProjectCardAll = () => {
  const truncateText = (text: string, maxWords: number, index: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return (
        <>
          {words.slice(0, maxWords).join(" ")}...{" "}
          <Link
            href={`/projects/${index}`}
            className="text-blue-400 hover:underline"
          >
            See More
          </Link>
        </>
      );
    }
    return text;
  };

  return (
    <section className="w-full min-h-screen text-white pt-24 pb-16 z-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsAll.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg border border-[#2A0E61] hover:border-[#7042f8] transition-all duration-300 hover:scale-105 bg-[#121212]"
            >
              {/* Image Section */}
              <div className="relative w-full h-56">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {truncateText(project.description, 12, index)}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <Link
                    href={`/projects/${index}`}
                    className="px-5 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-full transition"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-full transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardAll;
