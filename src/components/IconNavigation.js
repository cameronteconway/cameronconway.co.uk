import React, { useState } from 'react';
import { Link } from 'gatsby';

import { links, linkItem, bi } from '../styles/IconNavigation.module.css';

const IconNavigation = ({
    navIcons,
    socialIcons,
    lightMode,
    onLightModeChange,
}) => {
    const [diceNumber, setDiceNumber] = useState(1);

    const updateLightMode = () => {
        lightMode === 'off'
            ? onLightModeChange('on')
            : onLightModeChange('off');
    };

    const renderLightMode = () => {
        return (
            <div id="lightMode" className={linkItem}>
                <button onClick={updateLightMode}>
                    <i className={`${bi} bi bi-toggle-${lightMode}`}></i>
                </button>
            </div>
        );
    };

    const updateDiceNumber = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber);
    };

    const renderDice = () => {
        return (
            <div id="dice" className={linkItem}>
                <button onClick={updateDiceNumber}>
                    <i className={`${bi} bi bi-dice-${diceNumber}`}></i>
                </button>
            </div>
        );
    };

    const renderNavIcons = navIcons.map((item, index) => {
        const title = item.title;
        return item.internalLink ? (
            <div id={item.id} className={linkItem} key={index}>
                <Link to={item.href} className="internal-link" title={title}>
                    <i className={`${bi} bi bi-${item.iconFont}`}></i>
                </Link>
            </div>
        ) : (
            <div id={item.id} className={linkItem} key={index}>
                <a
                    href={item.href}
                    title={title}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className={`${bi} bi bi-${item.iconFont}`}></i>
                </a>
            </div>
        );
    });

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
                    <i className={`${bi} bi bi-${item.iconFont}`}></i>
                </a>
            </div>
        );
    });

    return (
        <div className="icon-navigation" style={{ width: '100%' }}>
            <ul className={links}>
                {renderNavIcons}
                {renderLightMode()}
                {renderDice()}
            </ul>
            <ul className={links}>{renderSocialIcons}</ul>
        </div>
    );
};

export default IconNavigation;
