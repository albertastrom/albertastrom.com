import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200 mb-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <Project
        title="CRInteractive"
        description="Web-app designed to quantify the rowing stroke, create a home for coach-athlete communication, and unify team goals. Built for Men's Varsity team at Community Rowing Inc. (CRI)."
        timeframe="Oct. 2021 - Jan. 2023"
        link="https://www.crinteractive.org"
        linkTitle="crinteractive.org"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Python", "Flask", "PostgreSQL"]}
      />

      <Project
        title="stud: Study Buddy"
        description="Web-app and Chrome extension designed to optimize focus and time management through coaching of quantified studying metrics."
        timeframe="Oct. 2023"
        link="https://github.com/albertastrom/stud"
        linkTitle="github.com/albertastrom/stud"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["React", "Next.js", "TypeScript"]}
      />

      <Project
        title="Room Rank"
        description="Program designed to rank dorm rooms on campus based on objective and subjective quantities, to pick the numerically best room."
        timeframe="April 2023"
        link="https://github.com/albertastrom/dorm-scorer"
        linkTitle="github.com/albertastrom/dorm-scorer"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Python", "NumPy"]}
      />

      <Project
        title="ThoughtJot"
        description="Web-app and Chrome extension designed to optimize research workflow and encourage academic integrity."
        timeframe="Aug. 2021"
        link="https://github.com/albertastrom/thoughtjot"
        linkTitle="github.com/albertastrom/thoughtjot"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Chrome Extension API", "Flask"]}
      />

      <Project
        title="Space Barrage"
        description="A 2D top-down view strategy video game, where two space ships battle it out in a deadly game of missiles. Built in Unity."
        timeframe="Jan. 2023"
        link="https://github.com/albertastrom/spacebarrage"
        linkTitle="github.com/albertastrom/spacebarrage"
        imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"
        technologies={["Unity", "C#"]}
      />
    </div>
  );
};

export default Projects;
