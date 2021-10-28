import React, { useState } from 'react';
import IconNavigation from './IconNavigation';

import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/global.css';

import { navIcons, socialIcons } from '../data/data';

const Layout = ({ children }) => {
    const [lightMode, setLightMode] = useState('off');

    let lightModeClass;
    lightMode === 'off'
        ? (lightModeClass = 'light-mode')
        : (lightModeClass = 'dark-mode');

    const body = document.querySelector('body');
    if (lightModeClass === 'dark-mode') {
        body.style.backgroundColor = 'rgb(18, 18, 18)';
        body.style.transition = '0.4s';
    } else {
        body.style.backgroundColor = 'white';
        body.style.transition = '0.4s';
    }

    return (
        <div className={`app-container ${lightModeClass}`}>
            <div className="wrapper">
                <IconNavigation
                    navIcons={navIcons}
                    socialIcons={socialIcons}
                    lightMode={lightMode}
                    onLightModeChange={setLightMode}
                />
                <main className="content">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
