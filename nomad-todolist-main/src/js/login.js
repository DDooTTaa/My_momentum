const loginBox = document.querySelector("#loginBox");
const guideBox = document.querySelector("#guide");
const app = document.querySelector("#app");
const NAME = "name";

let cntName = "";

function login() {
    const name = localStorage.getItem(NAME);

    if (name) {
        app.classList.remove("hide");
    } else {
        loginBox.classList.remove("hide");
        action();
    }
}

function action() {
    const form = loginBox.querySelector("form");
    const input = form.querySelector("input");
    const todoName = document.querySelector(".todoName");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = input.value;
        localStorage.setItem(NAME, name);

        loginBox.classList.add("hide");
        app.classList.remove("hide");
        guideBox.classList.remove("hide");
        todoName.innerText = `${name}'s To Do List`;
    });
}

function setGuide() {
    const addGuide = guideBox.querySelector(".addGuide");
    const inputGuide = guideBox.querySelector(".inputGuide");
    const deleteGuide = guideBox.querySelector(".deleteGuide");
    const initGuide = guideBox.querySelector(".initGuide");

    addGuide.querySelector("button").addEventListener("click", () => {
        addGuide.classList.add("hide");
        inputGuide.classList.remove("hide");
    });

    inputGuide.querySelector("button").addEventListener("click", () => {
        inputGuide.classList.add("hide");
        deleteGuide.classList.remove("hide");
    });

    deleteGuide.querySelector("button").addEventListener("click", () => {
        deleteGuide.classList.add("hide");
        initGuide.classList.remove("hide");
    });

    initGuide.querySelector("button").addEventListener("click", () => {
        guideBox.classList.add("hide");
    });
}

function init() {
    login();
    setGuide();
}

init();
