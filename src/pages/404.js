import React from 'react';

import { notFound, title } from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={notFound}>
            <h1 className={title}>404 Page not found</h1>
            <p>Unlucky mate, the page you're looking for doesn't exist.</p>
        </div>
    );
};

export default NotFound;
