window.addEventListener("load", initEvents);

var user_choice = "";
var cpu_choice = "";
var btns = [];
var count = 0;
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
        btns.push(btn);
        li.appendChild(btn);
        ul.appendChild(li);

        btn.addEventListener("click", userMove);
    }
}

function userMove() {
    this.innerText = user_choice;
    cpuPosition();
}

function cpuPosition() {
    if(count <= 8) {
        cpu_pos = parseInt(Math.random() * 9);
        if(btns[cpu_pos].innerText == "X" || btns[cpu_pos].innerText == "0") {
            console.log("Already occupied",cpu_pos);
            cpuPosition();
        }
        else {
            console.log("CPU Picked",cpu_pos);
            btns[cpu_pos].innerText = cpu_choice;
            btns[cpu_pos].disabled = 'on';
            return
        }
    }
}