import React from "react";
import { FaLink } from "react-icons/fa";
import HoverCard from "./HoverCard";

interface PositionProps {
  title: string;
  company: string;
  timeframe: string;
  description: string;
  link: string;
  linkTitle: string;
}

const Position: React.FC<PositionProps> = ({
  title,
  company,
  timeframe,
  description,
  link,
  linkTitle,
}) => {
  return (
    <HoverCard className="mb-4">
      <div className="">
        <div className="flex justify-between mb-0.5">
          <p>
            <span className="font-semibold text-xl">{title}</span>
            <span className="text-lg">, {company}</span>
          </p>
          <p className="text-sm text-gray-600">{timeframe}</p>
        </div>
        <p className="text-md text-gray-500 mb-2">{description}</p>
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
    </HoverCard>
  );
};

export default Position;
