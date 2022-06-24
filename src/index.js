import Wishlist from "./Wishlist";
import Car from "./Car";

let Wishlist = new Wishlist();

let car = new car("Ford, Mustang");
Wishlist.add(car);

console.log(Wishlist);

console.log(car);

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");

let WishlistU1 = document.querySelector("#wishiListContainer > ul");
let makeP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    let car = new car(make,model, year);

    Wishlist.add(car);

    let li = document.createElement("li");
    li.classList,add("list-group-item");
    li.textContent = car.model;
    WishlistUl.appendChild(li);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
});