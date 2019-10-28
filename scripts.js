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
    
    billQuantity = getInputValues(fieldId);

    if (validateInput(billQuantity)) {
        bills[fieldId] = billQuantity;
        total += (billQuantity * factors[fieldId]) - originalBillQuantity;
    } else {
        document.getElementById(fieldId).value = 0;
    }

    return total;
}

function getInputValues(fieldId) {
    return Number(document.getElementById(fieldId).value);
}

function validateInput(billQuantity) {
    if (billQuantity < 0) {
        console.log(`Less than 0`);
        return false;
    }
    return true;
}

function displayTotal(total) {
    document.getElementById("total").innerHTML = `$${total}`;
}