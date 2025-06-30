"use client";
import React, { useEffect, useRef } from "react";
import { FaLink } from "react-icons/fa";
import HoverCard from "./HoverCard";
import { annotate } from "rough-notation";

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
  const titleCompanyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (titleCompanyRef.current) {
      const annotation = annotate(titleCompanyRef.current, {
        type: "underline",
        // color: "#2563eb", // blue-600
        color: "#0ea5e9",  // sky-500
        strokeWidth: 2,
        padding: 2,
      });
      annotation.show();
    }
  }, [title, company]);

  return (
    <HoverCard className="mb-4">
      <div className="">
        <div className="flex justify-between mb-0.5">
          <p>
            <span ref={titleCompanyRef} className="inline">
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
