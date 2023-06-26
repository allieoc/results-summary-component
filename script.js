const button = document.getElementById("continue");

function buttonChange() {
    button.style.backgroundImage = "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))";
}

function resetButton() {
    button.style.backgroundImage = "";
}

button.addEventListener("mouseenter", buttonChange);
button.addEventListener("mouseout", resetButton);