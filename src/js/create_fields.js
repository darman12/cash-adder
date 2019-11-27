function createFields(currency, updateTotal) {
    for (let i = 0; i < currency.getNumDenominations(); i++) {
        addInputField(currency, i, updateTotal)
    }
}

function addInputField(denomination, index, callback) {
    let newField = document.createElement("input");

    setAttributes(newField, [
        {"type": "number"},
        {"id": `${index}`},
        {"name": `${denomination.getDenomination(index)}`},
        {"pattern": "[0-9]*"},
        {"placeholder": "0"},
        {"class": "glow"}
        
    ]);
    
    newField.addEventListener('change', (event) => {
        callback(event, denomination.getValue(event.target.id));
    });

    let label = document.createElement("label");
    label.setAttribute("for", `${denomination.getRepresentation(index)}`);
    label.innerHTML = `${denomination.getRepresentation(index)}` + "'s";

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "input-field");

    newDiv.appendChild(newField);
    newDiv.appendChild(label);

    let inputArea = document.getElementById("input-area");
    inputArea.appendChild(newDiv);
}