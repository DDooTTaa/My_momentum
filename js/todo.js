const toDoform = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    console.log("i will paint" + newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);
    //    console.log(li);
    span.innerText = newTodo + " ";
    button.innerText = "X";
    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    console.log(toDoInput.value);
    const InputValue = toDoInput.value
    toDoInput.value = ""
    toDos.push(InputValue);
    paintTodo(InputValue);
    saveToDos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

const saveTooDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parseTodos = JSON.parse(saveTooDos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}