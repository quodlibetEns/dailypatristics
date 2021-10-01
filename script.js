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
    let l = '#221c23';
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
    document.getElementById('main').style.lineHeight = "1.2em";
}

function largeSize() {
    document.getElementById('main').style.fontSize = "1.3rem";
    document.getElementById('main').style.lineHeight = "1.8em";
}