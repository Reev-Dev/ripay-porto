"use client";
import React, { useState } from "react";
import {
  Skill_data,
  Frontend_skill,
  Backend_skill,
} from "@/constants";
import Image from "next/image";

const tabOptions = [
  { label: "All Skills", key: "all" },
  { label: "Front-End", key: "frontend" },
  { label: "Back-End", key: "backend" },
] as const;

type TabKey = typeof tabOptions[number]["key"];

const skillMap = {
  all: Skill_data,
  frontend: Frontend_skill,
  backend: Backend_skill,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  return (
    <section className="flex justify-center bg-[#0b0b0b] text-white pt-20">
      <div className="w-full max-w-6xl flex px-4">
        {/* Sidebar Navigation */}
        <aside className="w-1/4">
          <ul className="flex flex-col gap-4 sticky top-20 z-50">
            {tabOptions.map((tab) => (
              <li key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-lg transition-all duration-200 cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  style={{ pointerEvents: "auto" }} // pastikan bisa diklik
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Section */}
        <main className="w-3/4 pl-10">
          <h2 className="text-2xl font-bold mb-6 capitalize">
            {tabOptions.find((t) => t.key === activeTab)?.label}
          </h2>

          <div className="flex flex-wrap gap-8">
            {skillMap[activeTab].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 bg-gray-900 rounded-lg p-4 shadow-md hover:scale-105 transition-all duration-200"
              >
                <Image
                  src={skill.Image}
                  alt={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                />
                <p className="text-sm text-center">{skill.skill_name}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
