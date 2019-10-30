var CounterModule = (function() {
    let total = 0;
    let denominationQuantities = [];
    
    function init(currencyInfo) {
    
        let currency = Currency;
    
        currency.init(currencyInfo);
    
        for (let i = 0; i < currency.getNumDenominations(); i++) {
            denominationQuantities.push(0);
        }
    
        createFields(currency);
    }
    
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
    
    function createFields(currency) {
        for (let i = 0; i < currency.getNumDenominations(); i++) {
            addInputField(currency, i)
        }
    }
    
    function addInputField(denomination, index) {
        let newField = document.createElement("input");
    
        setAttributes(newField, [
            {"type": "number"},
            {"id": `${index}`},
            {"name": `${denomination.getDenomination(index)}`},
            {"pattern": "[0-9]*"},
            {"placeholder": "0"}
        ]);
        
        newField.addEventListener('change', (event) => {
            updateTotal(event, denomination.getValue(event.target.id));
        });
    
        let fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", `${denomination.getDenomination(index)}`);
        fieldLabel.innerHTML = `${denomination.getRepresentation(index)}` + "'s";
    
        let inputFields = document.getElementById("input-fields");
        inputFields.appendChild(fieldLabel);
        inputFields.appendChild(newField);
        inputFields.appendChild(document.createElement("br"));
    }

    return {
        init: init
    }
}());

