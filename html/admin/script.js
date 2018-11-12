var APIroot = 'http://127.0.0.1:3000/api/';

function getMessagesAPI() {
    var request = new XMLHttpRequest();
    request.open('GET', APIroot + 'messages', true);
    request.onload = function () {
        var messages = JSON.parse(this.response);
        messages.forEach(message => {
            makeTableRow(message);
        });
    }
    request.send();
}

function getMessagesStatic() {
    var messages = JSON.parse('[{"line1": "Back to the future","line2": "The year is now 2106, but the issue remains. How do you intervene?"}, {"line1": "Belgium is a city","line2": "Extreme urbanization has turned the country into an endless city."}, {"line1": "Blast from the past","line2": "Do it like it\'s 1921."}, {"line1": "Blindness","line2": "A terrible disease has caused everyone to go blind."}, {"line1": "Brussels, Sahara desert","line2": "Brussels is a city in the middle of the Sahara desert."}, {"line1": "Communist Republic of Belgium","line2": "Belgium is a communist state."}, {"line1": "Elders only","line2": "90% of Brussels citizens are over 70 years old."}, {"line1": "Endless traffic jam","line2": "Brussels is experiencing the worst traffic jam in history. It has been going on for 15 years."}, {"line1": "Exchange economy","line2": "Money was never invented."}, {"line1": "Life on the move","line2": "No one stands still. Ever. Commuting is living."}, {"line1": "Neverland","line2": "No adults here."}, {"line1": "No electricity","line2": "It was never invented."}, {"line1": "No private property ","line2": "No owners. Only users."}, {"line1": "Orwellian dystopia","line2": "Commuting is banned and considered illegal."}]');
    messages.forEach(message => {
        makeTableRow(message);
    });
}

function makeTableRow(message) {
    var table = document.getElementById('messageTable');
    var row = table.insertRow(table.rows.length);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cb' + message.id;
    cell0.appendChild(checkbox);
    cell1.appendChild(document.createTextNode(message.line1));
    cell2.appendChild(document.createTextNode(message.line2));
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    //getMessagesAPI();
    getMessagesStatic();
});