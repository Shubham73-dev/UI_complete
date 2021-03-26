window.addEventListener("load", initEvents);

var user_choice = "";
var cpu_choice = "";
function initEvents() {
    document.querySelector(".start-btn").addEventListener("click", startGame);
}

function startGame() {
    var options = document.querySelector("#options");
    user_choice = options.value;
    if(user_choice == "X") {
        cpu_choice = "0";
    }
    else {
        cpu_choice = "X";
    }
    // console.log("User Picked", user_choice);
    options.setAttribute('disabled',true);
    buildUI();
}

function buildUI() {
    var ul = document.querySelector("#list");
    ul.style.display = 'flex';
    for(var i = 0; i < 9; i++) {
        var li = document.createElement("li");
        var btn = document.createElement("button");
        btn.className = 'btn';
        li.appendChild(btn);
        ul.appendChild(li);

        btn.addEventListener("click", userMove);
    }
}

function userMove() {
    this.innerText = user_choice;
}