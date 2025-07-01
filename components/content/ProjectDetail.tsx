import React from 'react';
import { ProjectData } from '@/lib/projects';

interface Props {
  project: ProjectData;
}

const ProjectDetail: React.FC<Props> = ({ project }) => {
  return (
    <div className="space-y-4">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md" />
      )}
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="text-gray-600">{project.timeframe}</p>
      <p>{project.description}</p>
      <div>
        <h2 className="font-semibold mb-1">Technologies</h2>
        <div className="flex flex-wrap">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-sm font-semibold text-gray-700 mr-2 mb-1 mt-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.contributors && project.contributors.length > 0 && (
        <div>
          <h2 className="font-semibold mb-1">Contributors</h2>
          <ul className="list-disc list-inside">
            {project.contributors.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      {project.links && project.links.length > 0 && (
        <div>
          <h2 className="font-semibold mb-1">Links</h2>
          <ul className="list-disc list-inside">
            {project.links.map((l, idx) => (
              <li key={idx}>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
