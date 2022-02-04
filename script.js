const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");

billInput.addEventListener("input", handleBillValue);
peopleInput.addEventListener("input", handlePeopleValue);
tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});

billInput.value = "0.00";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

function handleBillValue() {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
    calculateTip();
}

function handlePeopleValue() {
    peopleValue = parseFloat(peopleInput.value);
    console.log(peopleValue);
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML) {
            console.log(event.target.innerHTML);
            console.log(val.innerHTML);
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML)/100;
            console.log(tipValue);
        }
    });
    calculateTip();
}

function calculateTip() {
    if(peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}

