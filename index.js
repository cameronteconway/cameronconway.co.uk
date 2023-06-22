const body = document.querySelector('body');
const appContainer = body.querySelector('.app-container');

// Dark mode 
const updateDarkMode = (x) => {
    darkMode = x.getAttribute('data-darkmode');

    if(darkMode == 'false') {
        // Set dark mode
        x.setAttribute('data-darkmode', 'true');
        appContainer.classList.remove('light-mode');
        appContainer.classList.add('dark-mode');
        body.style.backgroundColor = 'rgb(18, 18, 18)';
        body.style.transition = '0.4s';
        x.children[0].classList.remove('bi-moon');
        x.children[0].classList.add('bi-lightbulb');
    } else {
        // Set light mode
        x.setAttribute('data-darkmode', 'false');
        appContainer.classList.remove('dark-mode');
        appContainer.classList.add('light-mode');
        body.style.backgroundColor = 'white';
        body.style.transition = '0.4s';
        x.children[0].classList.remove('bi-lightbulb');
        x.children[0].classList.add('bi-moon');
    }
}