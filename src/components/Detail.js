import React from 'react';

import { detail, title } from '../styles/Detail.module.css';

const Detail = () => {
    return (
        <div className={detail}>
            <h1 className={title}>Cameron Conway</h1>
            <br />
            <span>
                Web Developer from Lincoln working at the University of
                Nottingham.
            </span>
            <br /> <br />
            <span>
                I am passionate about creating clean and simple designs and
                developing user friendly and accessible websites.
            </span>
            <br /> <br />
            {/* <span className={skillTitle}>Languages &amp; Libraries</span>
            <p>HTML5, CSS3, JavaScript, PHP, SQL, JQuery</p>
            <span className={skillTitle}>Technologies &amp; Frameworks</span>
            <p>
                React, Redux, Laravel, Node.js, Express, Gatsby, Bootstrap, Tailwind,
                Git, Jira
            </p> */}
        </div>
    );
};

export default Detail;
