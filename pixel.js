//console.log("Javascript is alive!");
document.addEventListener("DOMContentLoaded", function() {

document.getElementById('squareOne').onclick = changeColorRed;
document.getElementById('squareTwo').onclick = changeColorBlue;
document.getElementById('squareThree').onclick = changeColorGreen;

function changeColor() {
    document.body.style.color = "red";
    return false;

function changeColor() {
    document.body.style.color = "blue";
    return false;

function changeColor() {
    document.body.style.color = "green";
    return false;
}