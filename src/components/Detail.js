import React from 'react';

import {
    detail,
    about,
    folderContainer,
    folderIcon,
    folder,
} from '../styles/Detail.module.css';

const Detail = ({ projects }) => {
    const renderProjects = projects.map((project, index) => {
        return (
            <a
                href={project.href}
                title={project.desc}
                key={index}
                className={folderIcon}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={folder}>
                    <span></span>
                    <p>{project.name}</p>
                </div>
            </a>
        );
    });

    return (
        <div className={detail}>
            <span className={about}>
                Cameron Conway is a Software Engineer from the UK.
            </span>
            <br /> <br />
            <br />
            {/* https://www.youtube.com/watch?v=xZgBOjEAs7E&ab_channel=NoorHUB */}
            <div className={folderContainer}>{renderProjects}</div>
        </div>
    );
};

export default Detail;
