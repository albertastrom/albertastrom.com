import React from "react";
import { FaLink } from "react-icons/fa";
import HoverCard from "./HoverCard"; 

interface ProjectProps {
  title: string;
  description: string;
  timeframe: string;
  link: string;
  linkTitle: string;
  imageUrl?: string; 
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  timeframe,
  link,
  linkTitle,
  imageUrl,
  technologies = [],
}) => {
  return (
    // Use HoverCard with imageHidden set to true to ensure image doesn't display
    <HoverCard className="mb-4" imageHidden={true}>
      <div className="flex justify-between "> 
        {/* Main content area */}
        <div className="flex-grow pr-3"> {/* Reduced padding from pr-4 to pr-3 */}
          <div className="flex justify-between items-start mb-0.5">
            <p className="font-semibold text-xl mr-2">{title}</p>
            <p className="text-sm text-gray-600 flex-shrink-0">{timeframe}</p>
          </div>
          <p className="text-md text-gray-500 mb-2">{description}</p>
          <div className="flex flex-wrap mb-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-sm font-semibold text-gray-700 mr-2 mb-1 mt-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-semibold text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
          >
            <FaLink className="mr-1 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
            {linkTitle}
          </a>
        </div>
        
        {imageUrl && (
          <div className="flex-shrink-0 self-center">
            <img
              src={imageUrl}
              alt={title}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </HoverCard>
  );
};

export default Project;