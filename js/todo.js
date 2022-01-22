const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-form input");
const todo_button = document.querySelector("#todo-form button");
const todoUl = document.querySelector("#todobox");
const xbutton = document.querySelector(".xbutton");
let todoItem;

function deleteToDo(todoItem) {

}

function printToDo(todoItem){
    let todoli = document.createElement('li');
    const span1 = document.createElement("span") ;
    const span2 = document.createElement("span") ;
    span2.className = "xbutton";
    span1.innerText = todoItem
    span2.innerText = "❌"
                        // <span class="xbutton">❌</button>`;
    todoli.appendChild(span1);
    todoli.appendChild(span2);
    console.log(todoli);
    todoUl.appendChild(todoli)
};


todo_button.addEventListener("click" , (e) => {
    e.preventDefault();
    todoItem = todo_input.value;
    printToDo(todoItem);
    todo_input.value = "";
    deleteToDo(todoItem);
})

xbutton.addEventListener("click" , () => {
    console.log("click");
})