var APIroot = 'http://127.0.0.1:3000/api/';
var messages;

// test messages
messages = JSON.parse('[{"line1": "Back to the future","line2": "The year is now 2106, but the issue remains. How do you intervene?"}, {"line1": "Belgium is a city","line2": "Extreme urbanization has turned the country into an endless city."}, {"line1": "Blast from the past","line2": "Do it like it\'s 1921."}, {"line1": "Blindness","line2": "A terrible disease has caused everyone to go blind."}, {"line1": "Brussels, Sahara desert","line2": "Brussels is a city in the middle of the Sahara desert."}, {"line1": "Communist Republic of Belgium","line2": "Belgium is a communist state."}, {"line1": "Elders only","line2": "90% of Brussels citizens are over 70 years old."}, {"line1": "Endless traffic jam","line2": "Brussels is experiencing the worst traffic jam in history. It has been going on for 15 years."}, {"line1": "Exchange economy","line2": "Money was never invented."}, {"line1": "Life on the move","line2": "No one stands still. Ever. Commuting is living."}, {"line1": "Neverland","line2": "No adults here."}, {"line1": "No electricity","line2": "It was never invented."}, {"line1": "No private property ","line2": "No owners. Only users."}, {"line1": "Orwellian dystopia","line2": "Commuting is banned and considered illegal."}]');

// load messages from API; comment this and uncomment 
// the line above to revert to the standard test messages
/*
var request = new XMLHttpRequest();
request.open('GET', APIroot+'messages', true);
request.onload = function () {
    messages = JSON.parse(this.response);
}
request.send();
*/


function getMsg() {

    if (messages.length) {
        var nbr = Math.floor(Math.random() * messages.length);
        var msg = messages.splice(nbr,1)[0];
    } else {
        var msg = {"line1":"You have been provoked enough","line2":"Try your luck elsewhere"};
        hide("provokebutton");
    }
    document.getElementById("line1").innerHTML = msg["line1"];
    document.getElementById("line2").innerHTML = msg["line2"];
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
    document.getElementById("closeexplanation").addEventListener("click", function () {
        hide("explanation");
    });
    document.getElementById("showExplanation").addEventListener("click", function () {
        show("explanation");
    });
});