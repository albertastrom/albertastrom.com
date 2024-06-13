
import React from 'react';
import { FaLink } from "react-icons/fa";

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
    imageUrl: string;
    technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, link, linkTitle, imageUrl, technologies = [] }) => {
  return (
    
    <div className="mb-4 py-1 px-2 rounded-lg border border-gray-200 shadow-lg flex justify-between">
        <div className='px-1 py-2'>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-md text-gray-500'>{description}</p>
            <div className='flex flex-wrap '>
              {technologies.map((tech, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-2 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-2">{tech}</span>
              ))}
            </div>
            <a href={link} target="_blank" className="inline-block font-semibold text-gray-600 text-sm"><FaLink className="inline-block text-gray-600 text-sm mr-1"/>{linkTitle}</a>
        </div>
        {/* <div>
            <img src={imageUrl} alt={title} className="w-24 h-24 object-cover px-1 py-1 rounded-lg"/>
        </div> */}
        
    </div>
  );
}

export default Project;