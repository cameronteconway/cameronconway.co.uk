import React from 'react';
import ProjectsDetail from '../components/ProjectsDetail';
import Helmet from 'react-helmet';

const Projects = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Cameron Conway | Projects</title>
                <meta name="description" content="Cameron Conway's projects" />
                <meta
                    name="keywords"
                    content="web development, projects, education, shop, blog, user friendly, accessible, design, blog posts"
                />
                <meta property="og:title" content="Cameron Conway | Projects" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Cameron Conway's projects"
                />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="en_US" />
                <meta
                    property="og:url"
                    content="https://www.cameronconway.co.uk/projects"
                />
                <link
                    ref="canonical"
                    href="https://www.cameronconway.co.uk/projects"
                />
            </Helmet>
            <ProjectsDetail />
        </React.Fragment>
    );
};

export default Projects;
