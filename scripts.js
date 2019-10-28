init();

function init() {
    bills = {
        hundreds: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0
    }

    document.getElementById("calculate-button").addEventListener('click', updateTotal(bills));
    
    document.querySelectorAll("input").forEach((field) => {
        field.addEventListener('change', () => {
            updateTotal(bills);
        });
    });
}

function updateTotal(bills) {
    getInputValues(bills);

    total = 0;

    total += bills.hundreds * 100
        + bills.twenties * 20
        + bills.tens * 10
        + bills.fives * 5
        + bills.ones;

    document.getElementById("total").innerHTML = `$${total}`;
}

function getInputValues(bills) {
    bills.hundreds = Number(document.getElementById("hundreds").value)
    bills.twenties = Number(document.getElementById("twenties").value);
    bills.tens = Number(document.getElementById("tens").value);
    bills.fives = Number(document.getElementById("fives").value);
    bills.ones = Number(document.getElementById("ones").value);
}