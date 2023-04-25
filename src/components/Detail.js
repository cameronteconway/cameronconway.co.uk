import React from 'react';
import Project from './Project';

import {
    detail,
    about,
    projectContainer,
    folderContainer,
    folderIcon,
    folder,
} from '../styles/Detail.module.css';

const Detail = ({ projects }) => {
    // const renderProjects = projects.map((project, index) => {
    //     return (
    //         <a
    //             href={project.href}
    //             title={project.desc}
    //             key={index}
    //             className={folderIcon}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //             <div className={folder}>
    //                 <span></span>
    //                 <p>{project.name}</p>
    //             </div>
    //         </a>
    //     );
    // });

    const renderProjects = projects.map((project, index) => (
        <Project key={index} project={project} />
    ));

    return (
        <div className={detail}>
            <span className={about}>
                Cameron Conway is a Software Engineer focused on building
                immersive digital experiences and user friendly applications.
            </span>
            <br />
            <br />
            {/* https://www.youtube.com/watch?v=xZgBOjEAs7E&ab_channel=NoorHUB */}
            {/* https://www.seanw.org/ - how to display projects */}
            {/* https://bbriel.me/ */}
            {/* <div className={folderContainer}>{renderProjects}</div> */}
            <div className={projectContainer}>{renderProjects}</div>
        </div>
    );
};

export default Detail;
