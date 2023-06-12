// APPEARANCE CONTROLS

function showOptions() {
    document.getElementById("appearance-mini").style.display = "none";
    document.getElementById("appearance-menu").style.display = "block";
}

function hideOptions() {
    document.getElementById("appearance-menu").style.display = "none";
    document.getElementById("appearance-mini").style.display = "block";
}

const root = document.querySelector(':root');

function changeTheme (theme) {
    let l = '#261a28';
    let d = '#f6efed';
    switch (theme) {
        case "light":
            root.style.setProperty('--foreground-shade', l);
            root.style.setProperty('--background-shade', d);
            break;
        case "dark":
            root.style.setProperty('--foreground-shade', d);
            root.style.setProperty('--background-shade', l);
            break;
        case "contrast":
            root.style.setProperty('--foreground-shade', '#000');
            root.style.setProperty('--background-shade', '#fff');
            break;
    }
}

function serif() {
    root.style.fontFamily = "'Cormorant Garamond', Garamond, serif";
}

function sans() {
    root.style.fontFamily = "Lato, sans-serif";
}

function normalSize() {
    document.getElementById('main').style.fontSize = "1rem";
    document.getElementById('main').style.lineHeight = "1.4em";
}

function largeSize() {
    document.getElementById('main').style.fontSize = "1.5rem";
    document.getElementById('main').style.lineHeight = "2em";
}

function showPopUpMenu() {
    document.getElementById('main').style.filter = "blur(15px)";
    document.getElementById('pop-up-appearance-menu').style.display = "block";
}

function hidePopUpMenu() {
    document.getElementById('main').style.filter = "none";
    document.getElementById('pop-up-appearance-menu').style.display = "none";
}

//SCROLL BUTTON

const scrollToTopButton = document.getElementById('scroll-to-top');

function scrollToTop () {
    scroll(0,0);
}