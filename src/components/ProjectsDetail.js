import React from 'react';

import { projects } from '../data/data';

import {
    projectsContainer,
    pageTitle,
    projectContainer,
    projectLink,
    projectName,
} from '../styles/ProjectsDetail.module.css';

const ProjectsDetail = () => {
    const renderProjects = projects.map((project, index) => {
        return (
            <div key={index} className={projectContainer}>
                <a
                    className={projectLink}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={projectName}>{project.name}</span>
                    {/* {project.desc} */}
                </a>
            </div>
        );
    });

    return (
        <div className={projectsContainer}>
            <h1 className={pageTitle}>Projects</h1>
            {renderProjects}
        </div>
    );
};

export default ProjectsDetail;
