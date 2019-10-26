init();

function init() {
    calculate_button = document.getElementById("calculate-button");
    calculate_button.addEventListener('click', calculateTotal);
}

function calculateTotal() {
    console.log("getting input values");
    bills = getInputValues();

    total = 0;

    total += bills.hundreds * 100;
    total += bills.twenties * 20;
    total += bills.tens * 10;
    total += bills.fives * 5;
    total += bills.ones;

    console.log(total);
    
    document.getElementById("total").innerHTML = `$${total}`;
}

function getInputValues() {
    bills = {
        hundreds: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0
    }

    bills.hundreds= Number(document.getElementById("hundreds").value)
    bills.twenties = Number(document.getElementById("twenties").value);
    bills.tens = Number(document.getElementById("tens").value);
    bills.fives = Number(document.getElementById("fives").value);
    bills.ones = Number(document.getElementById("ones").value);

    return bills;
}