// BACKEND - FETCHING TEXTS

/* Texts and related information are stored in a number of JSON records
In the order: PROVISIONAL
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

for simplicity of fetchtexts function, each indivudal occasion has its own .json record; these are the grouped only broad section (temporale etc)
This means that the minimal info passed to the function from the form (e.g. 'temporale', 'advent-1') is enough to generate a URI for the JSON directly

*/

function validateInput (section, occasion) {
    //input validation to go here
    return true; //for now
}

async function fetchTexts (section, occasion) {
    console.log('fetchTexts reports: has been called with param' + occasion); //testing

    if ( validateInput (section, occasion) ) {
        console.log('fetchTexts reports: validateInput returned true, continuing'); //testing

            let jsonUri = `https://dailypatristics.netlify.app/texts/${section}/${occasion}.json`;
            console.log(jsonUri); //testing

            async function getJSONData() {
                const response = await fetch(jsonUri); //needs to point to a web address for CORS reasons
                const jsonData = await response.json();
                console.log(jsonData); //testing
                return jsonData;
            }
            return await getJSONData();
        }
    // validation fail backstop
    throw new Error('Input section and occasion were not valid');
    
}

/* Later versions may include more complex input like dates.
For now, input is guaranteed to be a unique occasion value corresponding eventually to a JSON object.*/

//called by the user clicking 'generate'
async function getResults (selectId) {
    let occasion = document.getElementById(selectId).value; //occasion = the value of the box on which find texts was clicked, e.g. advent-1
    console.log(`getResults reports: section is ${selectId}, occasion is ${occasion}`); //testing

    let data = await fetchTexts(selectId, occasion); // returns an object
    console.log(`getResults reports: fetchTexts called with params ${selectId} and ${occasion}, returned ${data}`); //testing

    console.log(data.name);
}


//============================================

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
    document.getElementById('main').style.lineHeight = "1.2em";
}

function largeSize() {
    document.getElementById('main').style.fontSize = "1.3rem";
    document.getElementById('main').style.lineHeight = "1.8em";
}

function showPopUpMenu() {
    document.getElementById('main').style.filter = "blur(15px)";
    document.getElementById('pop-up-appearance-menu').style.display = "block";
}

function hidePopUpMenu() {
    document.getElementById('main').style.filter = "none";
    document.getElementById('pop-up-appearance-menu').style.display = "none";
}