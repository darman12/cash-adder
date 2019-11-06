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
        displayTotal(total);
    }
    
    function displayTotal(total) {
        document.getElementById("total").innerHTML = `$${total}`;
    }
    
    function init(currencyInfo) {
    
        let currency = Currency;
    
        currency.init(currencyInfo);
    
        for (let i = 0; i < currency.getNumDenominations(); i++) {
            denominationQuantities.push(0);
        }
    
        createFields(currency, updateTotal);
    }

    return {
        init: init
    }
}());

