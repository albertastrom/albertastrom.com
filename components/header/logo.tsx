import React from 'react';

const Logo: React.FC = () => {
    return (
        <div>
            <div className="w-7 h-7 bg-gradient-to-tr to-red-200 from-sky-600 rounded-full"></div>
            <a href="https://albertastrom.com">
                <div className="py-1 px-2 rounded-lg bg-white border border-gray-200 shadow-lg -mt-8 ml-4">
                    <p className="inline-block font-semibold text-gray-700">Albert&nbsp;Astrom</p>
                </div>
            </a>
        </div>
    );
};

export default Logo;