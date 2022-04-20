import React, { useState, useEffect } from 'react';
import IconNavigation from './IconNavigation';

import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/global.css';

import { socialIcons } from '../data/data';

const Layout = ({ children }) => {
    const [lightMode, setLightMode] = useState('moon');

    let lightModeClass;
    lightMode === 'moon'
        ? (lightModeClass = 'light-mode')
        : (lightModeClass = 'dark-mode');

    useEffect(() => {
        const body = document.querySelector('body');
        if (lightModeClass === 'dark-mode') {
            body.style.backgroundColor = 'rgb(18, 18, 18)';
            body.style.transition = '0.4s';
        } else {
            body.style.backgroundColor = 'white';
            body.style.transition = '0.4s';
        }
    }, [lightMode, lightModeClass]);

    return (
        <div className={`app-container ${lightModeClass}`}>
            <div className="wrapper">
                <IconNavigation
                    lightMode={lightMode}
                    onLightModeChange={setLightMode}
                    socialIcons={socialIcons}
                />
                <main className="content">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
