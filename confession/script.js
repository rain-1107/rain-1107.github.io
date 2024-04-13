var button = document.getElementById("button")
var b_text = document.getElementById("text")

function yes() {
    window.location.replace('/click')
}

function no() {
    console.log("pressed")
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 100)
    button.style.top = y + "%"
    button.style.left = x + "%"
    text.style.top = y + "%"
    text.style.left = x + "%"
}