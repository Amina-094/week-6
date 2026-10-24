
function addNumber(number) {
    document.getElementById("result").innerHTML += number;}
function addOperator(operator) {
    document.getElementById("result").innerHTML += operator;}
function calculate() {
    let expression = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = expression + "";}
function clearCalculator() {
    document.getElementById("result").innerHTML = "";}
