function ready() {
    document.getElementById('title').innerHTML = "Hello jQuery!"
}

function sayHi() {
    $("#title").html("Hello jQuery!");
}

$(document).ready(sayHi)
