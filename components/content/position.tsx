
import React from 'react';
import { FaLink } from "react-icons/fa";

interface PositionProps {
    title: string;
    company: string;
    timeframe: string;
    description: string;
    link: string;
    linkTitle: string;
}

const Position: React.FC<PositionProps> = ({ title, company, timeframe, description, link, linkTitle }) => {
  return (
    
    <div className="mb-4 py-1 px-2 rounded-lg border border-gray-200 shadow-lg flex justify-between">
        <div className='px-1 py-2'>
            <div className='flex justify-between gap-x-2.5 sm:gap-x-2 translate-y-1'><p><span className='font-semibold text-xl'>{title}</span><span className='text-l'>, {company}</span></p> <p className='text-sm'>{timeframe}</p></div>
            
            
            <p className='text-md text-gray-500'>{description}</p>
            <a href={link} className="inline-block font-semibold text-gray-600 text-sm"><FaLink className="inline-block text-gray-600 text-sm mr-1"/>{linkTitle}</a>
        </div>
        {/* <div>
            <img src={imageUrl} alt={title} className="w-24 h-24 object-cover px-1 py-1 rounded-lg"/>
        </div> */}
        
    </div>
  );
}

export default Position;