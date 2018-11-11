document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginform").onsubmit = function (event) {
        event.preventDefault();
        if (document.getElementById("user").value == "provocation" && document.getElementById("pwd").value == "engine") {
            window.open("messages.html", "_self");
        } else {
            document.getElementById("pwd").innerHTML = '';
            document.getElementById("errormessage").innerHTML = 'The username or password is incorrect. Try again or <a href="mailto:mvu@namahn.com">contact mvu</a> for help.';
        }
    }
});