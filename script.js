const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tipCustom = document.getElementById("tip-custom-input");
const resetBtn = document.getElementById("reset-btn");
const tips = document.querySelectorAll(".tips");

billInput.addEventListener("input", handleBillValue);
peopleInput.addEventListener("input", handlePeopleValue);
tipCustom.addEventListener("click", highlightTipCustom);
tipCustom.addEventListener("input", handleTipCustom);
resetBtn.addEventListener("click", handleReset);

tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});

billInput.value = "0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

function handleBillValue() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function handlePeopleValue() {
    peopleValue = parseFloat(peopleInput.value);
    if(peopleValue <= 0) {
        document.getElementById("error").classList.add("error-active");
        document.getElementById("people-input").classList.add("people-input-error");
    }
    if(peopleValue > 0) {
        document.getElementById("error").classList.remove("error-active");
        document.getElementById("people-input").classList.remove("people-input-error");
    }
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML) {
            console.log(event.target.innerHTML);
            console.log(val.innerHTML);
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML).toFixed(2)/100;
            console.log(tipValue);
        }
    });
    calculateTip();
}

function highlightTipCustom() {
    document.getElementById("tip-custom-input").classList.add("active-tip-custom");
}

function handleTipCustom() {
    tipValue = parseFloat(tipCustom.value / 100);
    calculateTip();
}

function handleReset() {
    billInput.value = "0";
    peopleInput.value = "1";
    tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    tipCustom.value = "";
}

function calculateTip() {
    if(peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipAmount;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}