import React, { ReactNode } from 'react';
import '../../app/styles/HoverCard.css'; 

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  imageHidden?: boolean; // Added prop to control image visibility
  [key: string]: any; // For other props
}

const HoverCard: React.FC<HoverCardProps> = ({ children, className = '', imageHidden = true, ...props }) => {
  return (
    <div className={`hover-card ${className} ${imageHidden ? 'image-hidden' : ''}`} {...props}>
      <div className="hover-card-content">
        {children}
      </div>
    </div>
  );
};

export default HoverCard;