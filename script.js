// BACKEND - FETCHING TEXTS

/* Texts and related information are stored in a number of JSON records
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

const validRecords = [
    "advent-", "natepi-", "prelent-", "lent-", "passion-", "easter-", "ttoc-", "t1dated-", "t1num-", "t2-",
    "certain-",
    "jan-", "feb-", "mar-", "apr-", "may-", "jun-", "jul-", "aug-", "sep-", "oct-", "nov-", "dec-",
    "com1-", "com2-", "com3-", "com4-", "com5-", "com6-", "com7-", "com8-", "com9-", "com10-", "com11-", "com12-", "com13-", "com14-",
    "bvm-", "defunctorum-"
]

function whichRecord (occasion) {
    let query = /^\D*?-/;
    let result = query.exec(occasion);
    if (result == null) {
        throw new Error ('An invalid occasion-name string was used. Occasion names must start with the relevant record code followed by a hyphen (e.g. "advent-")');
    }
    for (i = 0; i < validRecords.length; i++) {
        if (result[0] == validRecords[i]) {
            return i;
        } else {
            continue;
        }
    }
    throw new Error ('An invalid occasion-name string was used. Occasion names must start with the relevant record code followed by a hyphen (e.g. "advent-")');
}

var retrievedData = [];

function fetchTexts (occasion) {
    let record = whichRecord(occasion);

    fetch(bins[record])
        .then (
            response => response.json()
                .then (
                    data => {retrievedData = data}
                )
        )
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