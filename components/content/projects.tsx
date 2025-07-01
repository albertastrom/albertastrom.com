import React from 'react';
import Project from './project';
import { getProjects } from '@/lib/projects';

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div className="mt-8 px-4 py-2 rounded-lg bg-white border border-gray-200 mb-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      {projects.map((p) => (
        <Project
          key={p.slug}
          title={p.title}
          description={p.description}
          timeframe={p.timeframe}
          link={p.link}
          linkTitle={p.linkTitle}
          imageUrl={p.imageUrl}
          technologies={p.technologies}
        />
      ))}
    </div>
  );
};

export default Projects;
