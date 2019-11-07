CounterModule.init([
    {denomination: "hundreds", value: 100, representation: "100"},
    {denomination: "twenties", value: 20, representation: "20"},
    {denomination: "tens", value: 10, representation: "10"},
    {denomination: "fives", value: 5, representation: "5"},
    {denomination: "ones", value: 1, representation: "1"},
]);
let screenHeight = window.innerHeight;
let wrapper = document.getElementById("wrapper");

wrapper.style.top = `${screenHeight / 2}`;
wrapper.style.marginTop = `${wrapper.style.height / 2}`;
console.log("hello there");
console.log(`wrapper height ${wrapper.style.height}`);