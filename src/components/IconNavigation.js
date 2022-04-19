import React from 'react';

import { links, darkMode } from '../styles/IconNavigation.module.css';

const IconNavigation = ({ lightMode, onLightModeChange }) => {
    const updateLightMode = () => {
        lightMode === 'off'
            ? onLightModeChange('on')
            : onLightModeChange('off');
    };

    const renderLightMode = () => {
        return (
            <div id="lightMode" className={darkMode}>
                <button onClick={updateLightMode}>
                    <i className={` bi bi-toggle-${lightMode}`}></i>
                </button>
            </div>
        );
    };

    return (
        <div className="icon-navigation" style={{ width: '100%' }}>
            <div className={links}>{renderLightMode()}</div>
        </div>
    );
};

export default IconNavigation;
