const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-form input");
const todo_button = document.querySelector("#todo-form button");
const todoUl = document.querySelector("#todobox");
const xbutton = document.querySelector(".xbutton");
let id = 0;
let todoItem;
let todo_arr = [];

function deleteToDo(e) {
    const parent = e.path[1];
    todo_arr = todo_arr.filter( (e) => {
        return e.id !== Number(parent.id);
    });
    console.log("after" , todo_arr);
    localStorage.setItem( "data" , JSON.stringify(todo_arr));
    parent.remove();
}

function printToDo(todoItem){
    let todoli = document.createElement('li');
    const span1 = document.createElement("span") ;
    const span2 = document.createElement("span") ;
    todoli.id = todoItem.id;
    span1.className = "todo-list";
    span2.className = "xbutton";
    span1.innerText = todoItem.text;
    span2.innerText = "❌"
    span2.addEventListener("click" , deleteToDo);
    todoli.appendChild(span1);
    todoli.appendChild(span2);
    todoUl.appendChild(todoli)
};

function saveToDo(todo_obj) {
    todo_arr.push(todo_obj); 
    localStorage.setItem( "data" , JSON.stringify(todo_arr));
}
    
todo_button.addEventListener("click" , (e) => {
    e.preventDefault();
    id += 1;
    todoItem = todo_input.value;
    const todo_obj = {
        id ,
        text : todoItem
    };
    printToDo(todo_obj);
    todo_input.value = "";
    saveToDo(todo_obj)  
})

const savedToDos = JSON.parse(localStorage.getItem("data"));
if(savedToDos) {
    todo_arr = savedToDos;
    todo_arr.forEach(element => {
        printToDo(element);
    });
}