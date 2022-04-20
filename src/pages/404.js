import React from 'react';
import { Link } from 'gatsby';

import { notFound, title, errorMessage } from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={notFound}>
            <h1 className={title}>404 Page not found</h1>
            <span className={errorMessage}>
                Unlucky, the page you're looking for doesn't exist, go{' '}
                <Link to={'/'} className="home-link" title="Go to homepage">
                    home
                </Link>
                .
            </span>
        </div>
    );
};

export default NotFound;
