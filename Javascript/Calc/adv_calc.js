window.addEventListener("load", initEvent);

var textBox;

function initEvent() {
    textBox = document.querySelector('#box');
    textBox.setAttribute('readonly',true);
    var numbers = document.querySelectorAll(".num");
    var oprs = document.querySelectorAll('.opr');
    var calc = document.querySelector('#calc');
    for(var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", appendNumber);
    }

    for(var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click", appendOperators);
    }
}

function appendNumber() {
    var num = this.innerText;
    textBox.value += num;
}

function appendOperators() {
    var opr = this.innerText;
    console.log(opr);
    textBox.value += opr;
}