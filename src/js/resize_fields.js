function resizeFields() {
    console.log("called");
    document.querySelectorAll("input").forEach((field) => {
        console.log(field.style);
    });
}