window.addEventListener("load", initEvents);

var spanArray;
function initEvents() {
    document.querySelector("#box_1").addEventListener("blur", validate);
    document.querySelector("#box_2").addEventListener("keyup", validateEmail);
    document.querySelector("#box_3").addEventListener("keyup", checkPassword);
    document.querySelector("#box_4").addEventListener("change", confirmPassword);
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

function validateEmail() {
    // Regular Expressions
    var pattern = /[a-z|0-9]\w+[@]\w+[.]\w{2,3}/;
    var emailId = this.value;
    var valid = pattern.test(emailId);
    if(valid) {
        spanArray[1].innerHTML = 'Valid Email Id';
    }
    else {
        spanArray[1].innerHTML = 'Invalid Email Id';
    }
}

function checkPassword() {
    var password = this.value;
    // this.type = 'text';
    var progress_span = document.querySelector('.progress');
    if(password.length == 0) {
        spanArray[2].innerHTML = 'Please Enter a Password...';
        progress_span.style.width = '0px';
        progress_span.style.backgroundColor = 'transparent';
    }
    else if(password.length > 0 && password.length <= 5) {
        spanArray[2].innerHTML = 'Weak Password';
        progress_span.style.width = '50px';
        progress_span.style.backgroundColor = 'red';
        
    }
    else if(password.length > 5 && password.length <= 8) {
        spanArray[2].innerHTML = 'Average Password';
        progress_span.style.width = '100px';
        progress_span.style.backgroundColor = 'yellow';
    }
    else if(password.length > 8) {
        spanArray[2].innerHTML = 'Strong Password';
        progress_span.style.width = '150px';
        progress_span.style.backgroundColor = 'green';
    }
    else {
        spanArray[2].innerHTML = 'Valid';
    }
}

function confirmPassword() {

}