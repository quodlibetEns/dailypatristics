// APPEARANCE CONTROLS

const aMini = document.querySelector('#appearance-mini');
const aMenu = document.querySelector('#appearance-menu');
const aMenuTitle = document.querySelector('#appearance-menu-title');
const lightTheme = document.querySelector('#light-theme');

function showOptions () {
    aMini.style.display = "none";
    aMenu.style.display = "block";
    lightTheme.focus();
}

function hideOptions () {
    aMenu.style.display = "none";
    aMini.style.display = "block";
    aMini.focus();
}
// relevant eventListeners added at the bottom

const root = document.querySelector(':root');

function changeTheme (event) { // will be passed the event by the event listener
    const l = '#261a28';
    const d = '#f6efed';

    const theme = event.currentTarget.getAttribute('id'); // theme = the id of whichever elem was clicked on
    switch (theme) {
        case "light-theme":
            root.style.setProperty('--foreground-shade', l);
            root.style.setProperty('--background-shade', d);
            break;
        case "dark-theme":
            root.style.setProperty('--foreground-shade', d);
            root.style.setProperty('--background-shade', l);
            break;
        case "contrast-theme":
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



// ADD EVENT LISTENERS
aMini.addEventListener('click', showOptions); // for heaven's sake don't add brackets it makes it fire on page load
aMenuTitle.addEventListener('click', hideOptions); // click also handles keyboard equivs, since these are focusable elems

lightTheme.addEventListener('click', changeTheme);
document.querySelector('#dark-theme').addEventListener('click', changeTheme);
document.querySelector('#contrast-theme').addEventListener('click', changeTheme);
document.querySelector('#serif-typeface').addEventListener('click', serif);
document.querySelector('#sans-typeface').addEventListener('click', sans);
document.querySelector('#standard-size').addEventListener('click', normalSize);
document.querySelector('#large-size').addEventListener('click', largeSize);