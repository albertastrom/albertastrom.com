import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200 mb-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>


      <Project 
        title="Trinket"
        description="A user-friendly platform that instantly transforms your photos into stylized, 3D digital collectibles that you can easily save and share with friends."
        timeframe="September 2025"
        link="https://trinket.world/"
        linkTitle="trinket.world"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["three.js", "VLM", "2D to 3D"]}
      />

      <Project
        title="Multi-FPGA Graphics Engine"
        description="A multi-board graphics system that synchronizes multiple FPGAs to expand memory capacity for large framebuffers and VGA output."
        timeframe="March 2025 - June 2025"
        link="https://www.github.com/albertastrom/multi-fpga-graphics-engine"
        linkTitle="github.com/albertastrom/multi-fpga-graphics-engine"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["FPGA", "VHDL", "SPI"]}
      />
      
      <Project
        title="Veritas: Truth Agent"
        description="A Chrome extension that quietly verifies what you read by comparing articles to trusted sources, highlighting questionable claims, and letting you chat to better understand the information and its context."
        timeframe="June 2024 - August 2024"
        link="https://github.com/RachelJiarui/TruthAgent"
        linkTitle="github.com/RachelJiarui/TruthAgent"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Chrome Extension", "Gemini"]}
      />

      <Project
        title="CRInteractive"
        description="Web-app designed to quantify the rowing stroke, create a home for coach-athlete communication, and unify team goals. Built for Men's Varsity team at Community Rowing Inc. (CRI)."
        timeframe="Oct. 2021 - Jan. 2023"
        link="https://www.crinteractive.org"
        linkTitle="crinteractive.org"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Python", "Flask", "PostgreSQL"]}
      />

    </div>
  );
};

export default Projects;
