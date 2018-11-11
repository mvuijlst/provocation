var APIroot = 'http://127.0.0.1:3000/api/';

function getMessages() {
    var request = new XMLHttpRequest();
    request.open('GET', APIroot + 'messages', true);
    request.onload = function () {
        var messages = JSON.parse(this.response);
        messages.forEach(message => {
            var table = document.getElementById('messageTable');
            var row = table.insertRow(table.rows.length);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'cb'+message.id;
            cell0.appendChild(checkbox);
            cell1.appendChild(document.createTextNode(message.line1));
            cell2.appendChild(document.createTextNode(message.line2));
        });
    }
    request.send();
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    getMessages();
});