import React from 'react';

import {
    projectContainer,
    projectImage,
    contentContainer,
    contentHeader,
    projectTitle,
    githubLink,
} from '../styles/Project.module.css';

const Project = ({ project }) => {
    return (
        <div className={projectContainer}>
            <div className={contentContainer}>
                <div className={contentHeader}>
                    <span className={projectTitle}>{project.name}</span>
                    <a
                        className={githubLink}
                        href={project.repo}
                        title={project.desc}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={`bi bi-box-arrow-up-right`}></i>
                    </a>
                </div>
                <p>{project.desc}</p>
            </div>
        </div>
    );
};

export default Project;
