window.addEventListener("load", initEvents);

var num_1;
var num_2;

function initEvents() {
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    // document.getElementById('btn_1').addEventListener("click", add);
    // document.getElementById('btn_2').addEventListener("click", sub);
    // document.getElementById('btn_3').addEventListener("click", div);
    // document.getElementById('btn_4').addEventListener("click", mul);
    document.querySelector("#btn_1").addEventListener("click",add);
    document.querySelector("#btn_2").addEventListener("click",sub);
    document.querySelector("#btn_3").addEventListener("click",div);
    document.querySelector("#btn_4").addEventListener("click",mul);
}

function add() {
    var result = parseInt(num_1.value) + parseInt(num_2.value);
    showOutput(result);
}

function sub() {
    var result = parseInt(num_1.value) - parseInt(num_2.value);
    showOutput(result);
}

function div() {
    var result = parseInt(num_1.value) / parseInt(num_2.value);
    showOutput(result);
}

function mul() {
    var result = parseInt(num_1.value) * parseInt(num_2.value);
    showOutput(result);
}

function showOutput(result) {
    document.getElementById("box_3").value = result;
}