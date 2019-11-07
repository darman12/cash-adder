/*************************
 * Defines an object that represents a currency system
 */

var Currency = (function() {
    let denominations = [];
    let values = [];
    let representations = [];

    
    /********* Public functions **********/
    
    function getDenomination(index) {
        return denominations[index];
    }
    
    function getValue(index) {
        return values[index];
    }
    
    function getRepresentation(index) {
        return representations[index];
    }
    
    function getNumDenominations() {
        return denominations.length;
    }

    // removes items from arrays
    function reset() {
        for (let i = getNumDenominations(); i > 0; i--) {
            denominations.pop();
            values.pop();
            representations.pop();
        }
    }
    
    function init(currency) {
        reset();
    
        currency.forEach((denomination) => {
            denominations.push(denomination.denomination);
            values.push(denomination.value);
            representations.push(denomination.representation);
        });
    }

    return {
        init: init,
        getDenomination: getDenomination,
        getValue: getValue,
        getRepresentation: getRepresentation,
        getNumDenominations: getNumDenominations,
        reset: reset
    }
}());