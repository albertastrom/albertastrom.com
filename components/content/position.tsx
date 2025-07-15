"use client";
import React from "react";
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
  return (
    <div className={`group relative${isLast ? ' mb-4' : ' mb-8'}`}>
      {/* Timeline Node with Pulse Signal - Centered on timeline */}
      <div className="absolute left-2.5 top-1.5 w-5 h-5 flex items-center justify-center">
        {/* Signal Pulse */}
        <span className="absolute inline-block w-8 h-8 rounded-full bg-sky-500 opacity-0 group-hover:opacity-40 group-hover:animate-pulse-signal transition-all duration-500 z-0"></span>
        {/* Main Node */}
        <span className="relative w-4 h-4 rounded-full bg-sky-500 border-2 border-white shadow-md z-10 transition-transform duration-200 group-hover:scale-110"></span>
      </div>
      <div className="pl-12 pr-4">
        <div className="flex justify-between mb-0.5">
          <p>
            <span className="inline">
              <span className="font-semibold text-xl">{title}</span>
              <span className="text-lg">, {company}</span>
            </span>
          </p>
          <p className="text-sm text-gray-600">{timeframe}</p>
        </div>
        <p className="text-md text-gray-500 mb-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center font-semibold text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
        >
          <FaLink className="mr-1 text-gray-600 group-hover/link:text-blue-600 transition-colors duration-200" />
          {linkTitle}
        </a>
      </div>
    </div>
  );
};

export default Position;