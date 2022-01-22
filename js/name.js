const form = document.querySelector("#input-form")
const input = document.querySelector("#input-form input");
const btn = document.querySelector("#input-form button");
const show_name = document.querySelector(".show-name");
let user_name;

function printName(user_name) {
    show_name.innerText = `Hello ${localStorage.getItem("name")}`;
}

btn.addEventListener( "click" , (e) => {
    e.preventDefault();
    user_name = input.value;
    localStorage.setItem( "name", user_name);
    printName(user_name);
    form.classList.add("none");
    show_name.classList.remove("none");
})

console.log(typeof localStorage.getItem("name"));
console.log(localStorage.getItem("name"));

if (localStorage.getItem("name")) {
    form.classList.add("none");
    show_name.innerText = `Hello ${localStorage.getItem("name")}`;
    show_name.classList.remove("none");
} else {
    console.log("No local");
}