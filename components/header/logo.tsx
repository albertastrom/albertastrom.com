import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="relative">
            <p className='relative text-2xl text-left font-semibold text-neutral-900 tracking-tight'>Albert Astrom</p>
            {/* <p className="absolute -right-3 -bottom-5 -rotate-3 bg-orange-600 border-2 border-white text-white text-sm font-bold px-2 py-0.5 rounded-md shadow">
                Colby Computer Science
            </p> */}
        </div>
    );
};

export default Logo;