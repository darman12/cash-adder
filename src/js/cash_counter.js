var CounterModule = (function() {
    let total = 0;
    let denominationQuantities = [];
    
    
    function updateTotal(event, denominationValue) {
        let originalDenominationQuantity = denominationQuantities[event.target.id];
        let updatedQuantity = event.target.value;    
        
        if (updatedQuantity >= 0) {
            denominationQuantities[event.target.id] = updatedQuantity;
            
            total += (updatedQuantity * denominationValue) - (originalDenominationQuantity * denominationValue);
        } else {
            document.getElementById(event.target.id).value = 0;
        }
        displayTotal();
    }
    
    function displayTotal() {
        document.getElementById("total").innerHTML = `$${total}`;
        
        if (total > 0) {
            document.getElementById("total").style.color = "var(--dark-grey)";
        } else {
            document.getElementById("total").style.color = "var(--light-shadow)";
        }
    }
    
    function init(currencyInfo) {
    
        let currency = Currency;
    
        currency.init(currencyInfo);
    
        for (let i = 0; i < currency.getNumDenominations(); i++) {
            denominationQuantities.push(0);
        }
    
        createFields(currency, updateTotal);

        document.getElementById("clear").addEventListener('click', () => {
            document.querySelectorAll("input").forEach((inputField) => {
                inputField.setAttribute("value", '');
            });

            total = 0;
            displayTotal();
        });
    }

    return {
        init: init
    }
}());

