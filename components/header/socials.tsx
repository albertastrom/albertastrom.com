import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa6'; 

const Socials: React.FC = () => {
    return (
        <div className='flex gap-x-2.5 sm:gap-x-2 translate-y-1'>
            <a href="mailto:albert.astrom@me.com" className="relative text-gray-700 hover:text-sky-600 mx-1 group transition-colors">
                <FaEnvelope size={24} />
                <div className="absolute top-1 right-0 hidden group-hover:block pt-[1.3rem]"> 
                    <div className="bg-gray-200 px-3 py-1 rounded-md"> 
                        <p className="text-sm font-medium">albert.astrom@me.com</p> 
                    </div> 
                </div>
            </a>
            <a target="_blank" href="https://github.com/albertastrom" className="text-gray-700 hover:text-sky-600 mx-1 transition-colors">
                <FaGithub size={24} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/albertastrom/" className="text-gray-700 hover:text-sky-600 mx-1 transition-colors">
                <FaLinkedin size={24} />
            </a>

        </div>  
    );
};

export default Socials;