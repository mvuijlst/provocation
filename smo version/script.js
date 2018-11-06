var myarray = new Array(
    "Back to the future",
    "Blast from the past",
    "Brussels, Sahara desert",
    "Blindness",
    "Neverland",
    "Elders only",
    "Orwelian distopia",
    "No electricity",
    "No private property",
    "Exchange economy",
    "Life on the move",
    "Atlantis",
    "Belgium is a city",
    "Endless traffic jam",
    "Communist Republic of Belgium"
);

function getAnswer() {
    var random = Math.floor(Math.random() * myarray.length);


    // var random = myarray[Math.floor(Math.random() * myarray.length)];
    var answer = myarray.splice(random, 1)[0];
    console.log(answer);
    if (answer != undefined) {
        document.getElementById("message2").innerHTML = answer;
    }
    else {
        document.getElementById("message2").innerHTML = "You have been provoked enough";
        document.getElementById("expl").innerHTML = "Try your luck elsewhere";
    }

    var expla = document.getElementById("expl");
    var element = document.getElementById("message2");
    switch (answer) {
        case "Back to the future":
            document.getElementById("expl").innerHTML =
                "The year is now 2106, but the issue remains. How do you intervene?";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Blast from the past":
            document.getElementById("expl").innerHTML = "Do it like it`s 1921";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Brussels, Sahara desert":
            document.getElementById("expl").innerHTML =
                "Brussels is a city in the middle of the Sahara desert";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Blindness":
            document.getElementById("expl").innerHTML =
                "A terrible disease has caused everyone to go blind";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Elders only":
            document.getElementById("expl").innerHTML =
                "90% of Brussels citizens are over 70 years old.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Neverland":
            document.getElementById("expl").innerHTML = "No adults here.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Orwelian distopia":
            document.getElementById("expl").innerHTML =
                "Commuting is banned and considered illegal.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "No electricity":
            document.getElementById("expl").innerHTML = "It was never invented.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "No private property":
            document.getElementById("expl").innerHTML = "No owners. Only users.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Exchange economy":
            document.getElementById("expl").innerHTML = "Money was never invented";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Life on the move":
            document.getElementById("expl").innerHTML =
                "Noone stands still. Ever. Commuting is living";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Atlantis":
            document.getElementById("expl").innerHTML =
                "Brussels is a city underwater";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Belgium is a city":
            document.getElementById("expl").innerHTML =
                "Extreme urbanisation has turned the country into an endless city";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Endless traffic jam":
            document.getElementById("expl").innerHTML =
                "Brussels is experiencing the worst traffic jam in history. It has been going on for 15 years";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Communist Republic of Belgium":
            document.getElementById("expl").innerHTML =
                "Belgium is a communist state";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;
    }

}

function GetValue2() {
    var value = getAnswer();
    document.getElementById("message").innerHTML = value;
}

function GetValue() {

    var random = myarray[Math.floor(Math.random() * myarray.length)];

    document.getElementById("message").innerHTML = random;
    var expla = document.getElementById("expl");
    var element = document.getElementById("message");

    switch (answer) {
        case "Back to the future":
            document.getElementById("expl").innerHTML =
                "The year is now 2106, but the issue remains. How do you intervene?";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Blast from the past":
            document.getElementById("expl").innerHTML = "Do it like it`s 1921";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Brussels, Sahara desert":
            document.getElementById("expl").innerHTML =
                "Brussels is a city in the middle of the Sahara desert";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Blindness":
            document.getElementById("expl").innerHTML =
                "A terrible disease has caused everyone to go blind";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Elders only":
            document.getElementById("expl").innerHTML =
                "90% of Brussels citizens are over 70 years old.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Neverland":
            document.getElementById("expl").innerHTML = "No adults here.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Orwelian distopia":
            document.getElementById("expl").innerHTML =
                "Commuting is banned and considered illegal.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "No electricity":
            document.getElementById("expl").innerHTML = "It was never invented.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "No private property":
            document.getElementById("expl").innerHTML = "No owners. Only users.";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Exchange economy":
            document.getElementById("expl").innerHTML = "Money was never invented";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Life on the move":
            document.getElementById("expl").innerHTML =
                "Noone stands still. Ever. Commuting is living";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Atlantis":
            document.getElementById("expl").innerHTML =
                "Brussels is a city underwater";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Belgium is a city":
            document.getElementById("expl").innerHTML =
                "Extreme urbanisation has turned the country into an endless city";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Endless traffic jam":
            document.getElementById("expl").innerHTML =
                "Brussels is experiencing the worst traffic jam in history. It has been going on for 15 years";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;

        case "Communist Republic of Belgium":
            document.getElementById("expl").innerHTML =
                "Belgium is a communist state";
            expla.classList.add("slideLeft");
            element.classList.add("slideLeft");
            break;
    }
}
