import React from 'react';

import { notFound, title, errorMessage } from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={notFound}>
            <h1 className={title}>404 Page not found</h1>
            <span className={errorMessage}>
                Unlucky, the page you're looking for doesn't exist.
            </span>
        </div>
    );
};

export default NotFound;
