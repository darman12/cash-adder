/*******
 * Function for setting multiple attribute values of an element at once
 */
function setAttributes(element, attributes) {
    attributes.forEach((attribute) => {
        element.setAttribute(`${Object.keys(attribute)}`, `${Object.values(attribute)}`);
    });
}