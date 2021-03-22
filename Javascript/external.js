// event binding

// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", sayHello);
// })

window.addEventListener("load", initEvents);

function initEvents() {
    document.getElementById("btn").addEventListener("click", sayHello);
}

function sayHello() {
    console.log("You clicked on button...");
    var username = document.getElementById("box_1").value;
    document.getElementById('output').innerHTML = username;
}