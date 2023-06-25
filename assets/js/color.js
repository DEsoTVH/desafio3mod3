const color1 = "red";
const color2 = "blue";
const color3 = "green";
let pickedColor = "";

document.addEventListener('keydown', function (event) {
if (event.key === 'a' || event.key === 'A') {
        pickedColor = color1;

} else if (event.key === 's' || event.key === 'S') {
        pickedColor = color2;

} else if (event.key === 'd' || event.key === 'D') {
        pickedColor = color3;
} else {
        alert("CMON MAN!!! What did i tell you!");
}
});

function changeColor(divId) {
const div = document.getElementById(divId);
div.style.backgroundColor = pickedColor;
}

document.getElementById("box1").addEventListener("click", function() {
changeColor("box1");
});

document.getElementById("box2").addEventListener("click", function() {
changeColor("box2");
});

document.getElementById("box3").addEventListener("click", function() {
changeColor("box3");
});

document.getElementById("box4").addEventListener("click", function() {
changeColor("box4");
});