import React from 'react';
import Project from './project';

const Experience = () => {
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Experience 👨‍💻</h2>
        <Project title="Machine Learning Intern" description="Web-app designed to quantify the rowing stroke, create a home for coach-athlete communication, and unify team goals. Built for our team at Community Rowing Inc. (CRI)." link="https://www.crinteractive.org" linkTitle="crinteractive.org" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        <Project title="Data Structures and Algorithms Teaching Assistant" description="Web-app and Chrome extension designed to optimize focus and time management through coaching of quantified studying metrics." link="https://github.com/albertastrom/stud" linkTitle="github.com/albertastrom/stud" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>

        

        

    </div>
    
  );
}

export default Experience;