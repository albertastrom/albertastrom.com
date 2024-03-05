import React from 'react';
import Logo from './logo'
import Socials from './socials';

const Header: React.FC = () => {
    return (
        <div className="flex items-baseline justify-between">
            <Logo/>
            <Socials/>
        </div>
    );
};

export default Header;