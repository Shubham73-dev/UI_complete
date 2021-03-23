window.addEventListener("load", initEvents);

var num_1;
var num_2;

function initEvents() {
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    var btns = document.querySelectorAll('.btn');
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', calc);
    }
}

function calc() {
    var opr = this.innerText;
    // console.log(opr);
    var expression = num_1.value + opr + num_2.value;
    // console.log(expression);
    var result = eval(expression);
    showOutput(result);
}

function showOutput(result) {
    document.getElementById("box_3").value = result;
}