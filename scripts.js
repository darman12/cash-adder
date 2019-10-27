init();

function init() {
    calculate_button = document.getElementById("calculate-button");
    
    fields = document.querySelectorAll("input");
    fields.forEach((field) => {
        field.addEventListener('change', () => {
            updateTotal();
        });
    });

    calculate_button.addEventListener('click', updateTotal);
}

function updateTotal() {
    bills = {
        hundreds: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0
    }

    getInputValues(bills);

    total = 0;

    total += bills.hundreds * 100;
    total += bills.twenties * 20;
    total += bills.tens * 10;
    total += bills.fives * 5;
    total += bills.ones;

    document.getElementById("total").innerHTML = `$${total}`;
}

function getInputValues(bills) {
    bills.hundreds = Number(document.getElementById("hundreds").value)
    bills.twenties = Number(document.getElementById("twenties").value);
    bills.tens = Number(document.getElementById("tens").value);
    bills.fives = Number(document.getElementById("fives").value);
    bills.ones = Number(document.getElementById("ones").value);

    return bills;
}