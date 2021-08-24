const toDoform = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// function sexyFilter(id) {
//     return id !== 
// }
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    console.log("i will paint" + newTodo.text);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodo.id;
    span.innerText = newTodo.text + " ";
    button.innerText = "X";
    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    const InputValue = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: InputValue,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
    console.log(newTodoObj);
}

toDoform.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parseTodos = JSON.parse(saveTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}