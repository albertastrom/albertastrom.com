import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa6'; 

const Socials: React.FC = () => {
    return (
        <div className='flex items-center gap-x-2.5 sm:gap-x-2 translate-y-1'>
            {/* let's add email */}
            <a href="mailto:albert.astrom@me.com" className="text-gray-700 mx-1">
                <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/albertastrom" className="text-gray-700 mx-1">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/albertastrom/" className="text-gray-700 mx-1">
                <FaLinkedin size={24} />
            </a>

        </div>  
    );
};

export default Socials;