import React from 'react';
import Logo from './logo'
import Socials from './socials';

const Header: React.FC = () => {
    return (
        <header className="flex items-baseline justify-between">
            <Logo/>
            <Socials/>
        </header>
    );
};

export default Header;