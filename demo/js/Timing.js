function timedMsg() {
    setTimeout("alert('我名字是Alex')", 5000)
}

var c = 0
var t

function timedCount() {
    document.getElementById('show').innerText = c
    c = c + 1
    t = setTimeout("timedCount()", 1000)
}