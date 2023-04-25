import educationImage from '../../static/uni-building.jpg';
import storeImage from '../../static/woman-tube-background.jpg';
import fashionImage from '../../static/banner-woman.jpg';
import quizImage from '../../static/quiz-website.png';

export const socialIcons = [
    {
        iconFont: 'linkedin',
        text: 'linkedin.com/in/cameronteconway',
        href: 'https://www.linkedin.com/in/cameronteconway',
        id: 'linkedin',
        title: 'Find me on LinkedIn',
    },
    {
        iconFont: 'envelope',
        text: 'cameronteconway@outlook.com',
        href: 'mailto:cameronteconway@outlook.com',
        id: 'email',
        title: 'Send an email to Cameron Conway',
    },
    {
        iconFont: 'github',
        text: 'github.com/cameronteconway',
        href: 'https://github.com/cameronteconway',
        id: 'github',
        title: 'View my work on GitHub',
    },
];

export const projects = [
    {
        name: 'Education',
        img: educationImage,
        colour: '#003049',
        href: 'https://cameronconway-education.netlify.app/',
        repo: 'https://github.com/cameronteconway/education',
        desc: 'Clean, user friendly, and accessible homepage for a university.',
    },
    {
        name: 'Store',
        img: storeImage,
        colour: '#ffda35',
        href: 'https://cameronconway-store.netlify.app/',
        repo: 'https://github.com/cameronteconway/store',
        desc: 'Demonstrates some of the trends and designs seen on streetware websites.',
    },
    {
        name: 'Fashion',
        img: fashionImage,
        colour: '#272323',
        href: 'https://cameronconway-fashion.netlify.app/',
        repo: 'https://github.com/cameronteconway/fashion',
        desc: 'Demonstrates some of the trends and designs seen on high fasion websites.',
    },
    {
        name: 'Quiz',
        img: quizImage,
        colour: '#e7e5df',
        href: 'https://cameronconway-quiz.netlify.app/',
        repo: 'https://github.com/cameronteconway/quiz',
        desc: 'Quiz web application using React and Redux.',
    },
];
