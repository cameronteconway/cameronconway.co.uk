import React from 'react';
import Detail from '../components/Detail';
import Helmet from 'react-helmet';

const Index = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Cameron Conway</title>
                <meta
                    name="description"
                    content="Cameron Conway's portfolio website"
                />
                <meta
                    name="keywords"
                    content="web development, design, portfolio, projects, software, accessibility, user friendly, websites, JavaScript, HTML, CSS, Gatsby, React"
                />
                <meta property="og:title" content="Cameron Conway" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Cameron Conway's portfolio website"
                />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="https://cameronconway.co.uk" />
                <link ref="canonical" href="https://cameronconway.co.uk" />
            </Helmet>
            <Detail />
        </React.Fragment>
    );
};

export default Index;
