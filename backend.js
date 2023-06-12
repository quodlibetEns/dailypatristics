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

    if ( validateInput (section, occasion) ) {

            let jsonUri = `https://dailypatristics.netlify.app/texts/${section}/${occasion}.json`;

            async function getJSONData() {
                const response = await fetch(jsonUri); //needs to point to a web address for CORS reasons
                const jsonData = await response.json();
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
    let data = await fetchTexts(selectId, occasion); // returns an object

    //check what texts there are, then print them
    let newContent = `<h2 class="occasion-title">${data.name}</h2>`;

    if (data.hasLegend) {
        let i = 1; //not 0 - later needs to match JSON keys which start from 1
        while (i <= data.legendChunks) { //print as many sermon chunks as there are
            j = "legend" + i.toString();
            newContent += `
                <h3 class="title-en">${data[j].titleEn}</h3>
                <h4 class="title-la">${data[j].titleLa}</h4>
                <p>${data[j].text1}</p>
                <p>${data[j].text2}</p>
                <p>${data[j].text3}</p>`;
            i++;
        }
    }

    if (data.hasSermon) {
        let i = 1;
        while (i <= data.sermonChunks) {
            j = "sermon" + i.toString();
            newContent += `
                <h3 class="title-en">${data[j].titleEn}</h3>
                <h4 class="title-la">${data[j].titleLa}</h4>
                <p>${data[j].text1}</p>
                <p>${data[j].text2}</p>
                <p>${data[j].text3}</p>`;
            i++;
        }
    }

    if (data.hasHomily) {
        let i = 1;
        while (i <= data.homilyChunks) {
            j = "homily" + i.toString();
            newContent += `
                <h3 class="title-en">${data[j].titleEn}</h3>
                <h4 class="gospel-title-la">
                    <div>${data[j].titleLa}</div>
                    <div class="pericope">${data[j].pericope.gospel}. ${data[j].pericope.chapter}: ${data[j].pericope.verse}</div>
                </h4>
                <p>${data[j].text1}</p>
                <p>${data[j].text2}</p>
                <p>${data[j].text3}</p>`;
            i++;
        }
    }

    const result = document.getElementById('result');

    const scrollButtonHtml = `<div id="scroll-to-top" onclick="scrollToTop()">&#8593;</div>`;

    result.innerHTML = scrollButtonHtml + newContent;
    result.style.display = "block"; //make results area visible once generated
    result.scrollIntoView(true); //true is value to alignToTop

    document.getElementById('scroll-to-top').style.display = 'block';
}