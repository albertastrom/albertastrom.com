import React from 'react';
import Project from './project';

const Projects = () => {
  return (
    <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <Project title="CRInteractive" description="Web-app designed to quantify the rowing stroke, create a home for coach-athlete communication, and unify team goals. Built for our team at Community Rowing Inc. (CRI)." link="https://www.crinteractive.org" linkTitle="crinteractive.org" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        <Project title="stud: Study Buddy" description="Web-app and Chrome extension designed to optimize focus and time management through coaching of quantified studying metrics." link="https://github.com/albertastrom/stud" linkTitle="github.com/albertastrom/stud" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        <Project title="Room Rank" description="Program design to rank dorm rooms on campus based on objective and subjective quantities, to pick the numerically best room." link="https://github.com/albertastrom/stud" linkTitle="github.com/albertastrom/stud" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        <Project title="Space Barrage" description="Program design to rank dorm rooms on campus based on objective and subjective quantities, to pick the numerically best room." link="https://github.com/albertastrom/stud" linkTitle="github.com/albertastrom/stud" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        <Project title="ThoughtJot" description="Program design to rank dorm rooms on campus based on objective and subjective quantities, to pick the numerically best room." link="https://github.com/albertastrom/stud" linkTitle="github.com/albertastrom/stud" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

    </div>
    
  );
}

export default Projects;