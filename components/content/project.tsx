
import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
    imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, linkTitle, imageUrl }) => {
  return (
    
    <div className="mb-4 py-1 px-2 rounded-lg bg-white border border-gray-200 shadow-lg">
        <h3 className='font-semibold'>{title}</h3>
        <p>{description}</p>
        <a href={link} className="inline-block font-semibold text-gray-700">{linkTitle}</a>
        <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Project;