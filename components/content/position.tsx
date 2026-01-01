"use client";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";

interface PositionProps {
  title: string;
  company: string;
  timeframe: string;
  description: string;
  link: string;
  linkTitle: string;
  isLast?: boolean;
}

const Position: React.FC<PositionProps> = ({
  title,
  company,
  timeframe,
  description,
  link,
  linkTitle,
  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex gap-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div className="relative">
          <div 
            className={`w-4 h-4 rounded-full bg-sky-400 border-[3px] border-white shadow-md z-10 relative transition-all duration-300 ${
              isHovered ? 'scale-125' : ''
            }`}
          />
          {/* Pulse ring animation */}
          <div 
            className={`absolute inset-0 w-4 h-4 rounded-full bg-sky-400 transition-opacity duration-300 ${
              isHovered ? 'animate-timeline-pulse opacity-100' : 'opacity-0'
            }`}
          />
          <div 
            className={`absolute inset-0 w-4 h-4 rounded-full bg-sky-400 transition-opacity duration-300 ${
              isHovered ? 'animate-timeline-pulse-delayed opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/* Connector line */}
        {!isLast ? (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-sky-300 to-sky-200 min-h-[80px]" />
        ) : (
          <div className="w-0.5 h-16 bg-gradient-to-b from-sky-300 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-4' : 'pb-8'}`}>
        <div className="flex justify-between items-start mb-1">
          <p>
            <span className="inline">
              <span className="font-semibold text-xl">{title}</span>
              <span className="text-lg text-gray-700">, {company}</span>
            </span>
          </p>
          <p className="text-sm text-gray-500 whitespace-nowrap ml-4">{timeframe}</p>
        </div>
        <p className="text-md text-gray-500 mb-2 leading-relaxed">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 text-sm transition-colors duration-200"
        >
          <FaLink className="mr-1.5 text-sky-500 group-hover/link:text-sky-600 transition-colors duration-200" />
          {linkTitle}
        </a>
      </div>
    </div>
  );
};

export default Position;
