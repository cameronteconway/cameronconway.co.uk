const toggelOff = document.querySelector('.bi-toggle-off');

toggelOff.addEventListener('click', e => {
    if(e.target.className.split(" ")[1] == "bi-toggle-off") {
        e.target.classList.remove("bi-toggle-off");
        e.target.classList.add("bi-toggle-on");

        // Dark mode
        document.querySelector("body").style.backgroundColor = "#121212";
        const linksLight = document.querySelectorAll(".links i");
        for(let i = 0; i < linksLight.length; i++) {
            linksLight[i].style.color = "#FFFFFF";
        }
        document.querySelector(".name").style.color = "#FFFFFF";
        document.querySelector(".about-me").style.color = "#FFFFFF";
        document.querySelector(".skills").style.color = "#FFFFFF";

        const skillsTitle = document.querySelectorAll(".skills span");
        for(let i = 0; i < skillsTitle.length; i++) {
            skillsTitle[i].style.color = "#FFFFFF";
        }
        
    } else {
        e.target.classList.remove("bi-toggle-on");
        e.target.classList.add("bi-toggle-off");

        
        // Light mode
        document.querySelector("body").style.backgroundColor = "#FFFFFF";
        const linksDark = document.querySelectorAll(".links i");
        for(let i = 0; i < linksDark.length; i++) {
            linksDark[i].style.color = "#262737";
        }
        document.querySelector(".name").style.color = "#000000";
        document.querySelector(".about-me").style.color = "#262737";
        document.querySelector(".skills").style.color = "#262737";
        
        const skillsTitle = document.querySelectorAll(".skills span");
        for(let i = 0; i < skillsTitle.length; i++) {
            skillsTitle[i].style.color = "#000000";
        }
    }
})