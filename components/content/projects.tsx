import React from 'react';
import Project from './project';

const Projects = () => {
  return (
    <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <Project title="CRInteractive" description="Look what I did..." link="https://www.crinter.com" linkTitle="Link to project" imageUrl="https://www.uncovercolorado.com/wp-content/uploads/2013/12/Aspen-Highlands-Bowl-Hike-800x400.jpg"/>
    </div>
  );
}

export default Projects;