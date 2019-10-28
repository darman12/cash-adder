init();

function init() {
    bills = {
        hundreds: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0
    }

    let total = 0;
    
    document.querySelectorAll("input").forEach((field) => {
        field.addEventListener('change', () => {
            total = updateTotal(bills, field.id, total);
            displayTotal(total);
        });
    });
}

function updateTotal(bills, fieldId, total) {
    const factors = {
        hundreds: 100,
        twenties: 20,
        tens: 10,
        fives: 5,
        ones: 1
    }
    originalBillQuantity = 1 * (bills[fieldId] * factors[fieldId]);
    
    numBills = getInputValues(bills, fieldId);
    validateInput(bills, fieldId);

    total += (numBills * factors[fieldId]) - originalBillQuantity;

    return total;
}

function getInputValues(bills, fieldId) {
    bills[fieldId] = Number(document.getElementById(fieldId).value);
    return bills[fieldId];
}

function validateInput(bills, fieldId) {
    if (bills[fieldId] < 0) {
        console.log(`Less than 0 ${fieldId}`);
    }
}

function displayTotal(total) {
    document.getElementById("total").innerHTML = `$${total}`;
}