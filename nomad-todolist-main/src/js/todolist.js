const addBtn = document.querySelector(".todoIconBox>span:nth-child(1)");
const deleteBtn = document.querySelector(".todoIconBox>span:nth-child(2)");
const checkBoxs = document.querySelectorAll(".checkBox");
const todolist = document.querySelector(".todolist");

const TODO = "todo";

let cntTodolist = [];

function handleClickAdd(event) {
    addTodoForm();
    cntTodolist.push("");

    localStorage.setItem(TODO, JSON.stringify(cntTodolist));
}

function handleClickDelete(event) {
    const todos = todolist.querySelectorAll(".todo");

    todos.forEach((todo) => {
        const check = todo.querySelector(".check");

        if (!check.classList.contains("hide")) {
            todolist.removeChild(todo);
        }
    });

    saveTodolist();
}

function handleCheck(event) {
    const check = event.target.parentNode.querySelector(".check");

    if (check.classList.contains("hide")) {
        check.classList.remove("hide");
    } else {
        check.classList.add("hide");
    }
}

function handleSubmitTodo(event) {
    event.preventDefault();
    const { target } = event;
    const todoline = target.parentNode;
    const p = document.createElement("p");
    p.innerText = target.querySelector("input").value;

    todoline.removeChild(event.target);
    todoline.appendChild(p);

    saveTodolist();
}

function addCheckBox() {
    const checkBox = document.createElement("span");
    const check = document.createElement("span");

    checkBox.className = "checkBox material-icons-outlined";
    checkBox.innerText = "check_box_outline_blank";
    check.className = "check material-icons-outlined hide";
    check.innerText = "done";

    checkBox.addEventListener("click", handleCheck);

    const div = document.createElement("div");
    div.appendChild(checkBox);
    div.appendChild(check);

    return div;
}

function addTodoForm() {
    const todoline = document.createElement("li");
    todoline.className = "todo";

    const form = document.createElement("form");
    const input = document.createElement("input");

    input.type = "text";
    form.addEventListener("submit", handleSubmitTodo);

    form.appendChild(input);

    todoline.appendChild(addCheckBox());
    todoline.appendChild(form);

    todolist.appendChild(todoline);
}

function addTodo(todo) {
    const todoline = document.createElement("li");
    todoline.className = "todo";

    const p = document.createElement("p");
    p.innerText = todo;

    todoline.appendChild(addCheckBox());
    todoline.appendChild(p);

    todolist.appendChild(todoline);
}

function loadTodolist() {
    const todos = JSON.parse(localStorage.getItem(TODO));

    if (todos && todos.length > 0) {
        todos.forEach((value) => {
            if (value !== "") {
                addTodo(value);
                cntTodolist.push(value);
            } else {
                addTodoForm();
                cntTodolist.push("");
            }
        });
    } else {
        addTodoForm();
        cntTodolist.push("");
    }
}

function saveTodolist() {
    const todos = todolist.querySelectorAll(".todo");
    cntTodolist = [];

    todos.forEach((todo) => {
        const input = todo.querySelector("input");

        if (input) {
            cntTodolist.push("");
        } else {
            const p = todo.querySelector("p");
            cntTodolist.push(p.innerText);
        }
    });

    localStorage.setItem(TODO, JSON.stringify(cntTodolist));
}

function loadName() {
    const name = localStorage.getItem(NAME);
    document.querySelector(".todoName").innerText = `${name}'s To Do List`;
}

function init() {
    addBtn.addEventListener("click", handleClickAdd);
    deleteBtn.addEventListener("click", handleClickDelete);

    loadName();
    loadTodolist();
}

init();
