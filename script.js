// BACKEND - FETCHING TEXTS

/* Texts and related information are stored in a number of JSON records
Which are all publically available and hosted on jsonbin.io
The array 'bins' stores the access urls for each record 
In the order: 
1. temporale
advent, nativity-epiphany, prelent, lent, passiontide-holyweek, eastertide, trinity-to-corpus, trinity-part1-dated, trinity-part1-numbered, trinity-part2
2. certain-movable
certain-moveable
3. sanctorale
(months jan-dec)
4. communale
(comms 1-14)
5. votives
bvm, defunctorum
*/

const bins = [
    "https://api.jsonbin.io/b/6157afa04a82881d6c594822"
]

function whichRecord (occasion) {
    /*using regex (probably?), and a switch,
    return the index of bins[] corresponding to the correct record for the occasion.*/
}

function fetchTexts (occasion) {
    // check which record to retrieve for this occasion
    let record = whichRecord(occasion);

    fetch(bins[record])
        .then(response => response.json())
        .then(data => console.log(data)); //change to return data
}

// PROCESSING THE RETRIEVED DATA

/* call fetchTexts on (occasion)
work out number of texts;
create array for each texts within one big array;
assign correct data to each array;
return array. */

// DOM MANIPULATION: DISPLAYING TEXTS

/* function printResults(occasion)
get the array of arrays;
prepare new dom elements accoridng to number of texts;
populate new elements' text from arrays 
[this is the output function] */

// PROCESSING USER INPUT

/* Later versions may include more complex input like dates.
For now, input is guaranteed to be a unique occasion value corresponding eventually to a JSON object.*/

var occasion = "";

//called by the user clicking 'generate'
function findTexts (selectId) {
    occasion = document.getElementById(selectId).value;
    printResults(occasion);
}




// DOM MANIPULATION: APPEARANCE CONTROLS

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