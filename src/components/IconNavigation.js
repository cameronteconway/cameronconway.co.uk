import React from 'react';

import {
    links,
    linkItem,
    darkMode,
    socialContainer,
} from '../styles/IconNavigation.module.css';

const IconNavigation = ({ lightMode, onLightModeChange, socialIcons }) => {
    const updateLightMode = () => {
        lightMode === 'moon'
            ? onLightModeChange('lightbulb')
            : onLightModeChange('moon');
    };

    const renderLightMode = () => {
        return (
            <div className={darkMode}>
                <button onClick={updateLightMode}>
                    <i className={` bi bi-${lightMode}`}></i>
                </button>
            </div>
        );
    };

    const renderSocialIcons = socialIcons.map((item, index) => {
        const title = item.title;
        return (
            <div id={item.id} className={linkItem} key={index}>
                <a
                    href={item.href}
                    title={title}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className={`bi bi-${item.iconFont}`}></i>
                </a>
            </div>
        );
    });

    return (
        <div className="icon-navigation" style={{ width: '100%' }}>
            <div className={links}>{renderLightMode()}</div>
            <div className={socialContainer}>{renderSocialIcons}</div>
        </div>
    );
};

export default IconNavigation;
