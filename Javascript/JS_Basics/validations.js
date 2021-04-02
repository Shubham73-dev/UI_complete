window.addEventListener("load", initEvents);

var spanArray;
function initEvents() {
    document.querySelector("#box_1").addEventListener("blur", validate);
    document.querySelector("#box_2").addEventListener("blur", validate);
    document.querySelector("#box_3").addEventListener("blur", validate);
    document.querySelector("#box_4").addEventListener("blur", validate);
    spanArray = document.querySelectorAll(".output");
}

function validate() {
    var input_value = this.value;
    // parent = this.parentElement;
    var span = this.parentElement.parentElement.children[2].children[0];
    if(input_value) {
        span.innerHTML = 'Valid';
        this.style.border = '1px solid green';
    }
    else {
        span.innerHTML = 'Please fill this field';
        this.style.border = '1px solid red';
    }
}