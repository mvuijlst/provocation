var messages = ["Atlantis|Brussels is a city underwater",
    "Back to the future|The year is now 2106, but the issue remains. How do you intervene?",
    "Belgium is a city|Extreme urbanization has turned the country into an endless city",
    "Blast from the past|Do it like it's 1921",
    "Blindness|A terrible disease has caused everyone to go blind",
    "Brussels, Sahara desert|Brussels is a city in the middle of the Sahara desert",
    "Communist Republic of Belgium|Belgium is a communist state",
    "Elders only|90% of Brussels citizens are over 70 years old.",
    "Endless traffic jam|Brussels is experiencing the worst traffic jam in history. It has been going on for 15 years",
    "Exchange economy|Money was never invented",
    "Life on the move|No one stands still. Ever. Commuting is living",
    "Neverland|No adults here.",
    "No electricity|It was never invented.",
    "No private property |No owners. Only users.",
    "Orwellian dystopia|Commuting is banned and considered illegal."
];

function getMsg() {
    var msg = Math.floor(Math.random() * messages.length);
    var line1 = messages[msg].split('|')[0];
    var line2 = messages[msg].split('|')[1];
    document.getElementById("line1").innerHTML = line1;
    document.getElementById("line2").innerHTML = line2;
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("provokebutton").addEventListener("click", function () {
        getMsg();
    });
    document.getElementById("feedbackbutton").addEventListener("click", function () {
        hide("feedbackbutton");
        show("feedbackform");
    });
    document.getElementById("submitfeedback").addEventListener("click", function () {
        hide("feedbackform");
        show("feedbackthanks");
    });
    document.getElementById("closefeedback").addEventListener("click", function () {
        hide("feedbackform");
        show("feedbackbutton");
    });
});


/*

// Fisher-Yates shuffle -- use in a later version to avoid 
// seeing the same thing more than once
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

*/