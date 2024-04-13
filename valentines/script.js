var no_button = document.getElementById("no")
var yes_button = document.getElementById("yes")
var text = document.getElementById("text")
var button_size = 12
if (window.outerWidth<700) [
    button_size = 30
]
var b_text = document.getElementById("text")
var text_options = ["Are you sure?", "Pretty pleaseeee", "I really think you should press yes", "Yes?", ":(", "Come on just press yes", "Yk you want to", "Honestly your just clicking for the fun of it", "Omds press yes!"]
var text_index = 0


function yes() {
    console.log("yes")
    window.location.replace('/click/')
}

function no() {
    console.log(button_size)
    console.log(button_size.toString()+"%")
    button_size += 1
    yes_button.style.maxWidth = button_size.toString()+"%"
    text_index += 1
    if (text_index>text_options.length-1) {
        text_index = 0
    }
    text.textContent = text_options[text_index]
}