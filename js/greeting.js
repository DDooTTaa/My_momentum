const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const main = document.querySelector(".main");
const todo = document.querySelector(".todo-list");
const loginbox = document.querySelector(".loginBox");
const leftNav = document.querySelector(".left-nav");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `${username}'s Todo List`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  bg.classList.remove(HIDDEN_CLASSNAME);
  loginbox.classList.add(HIDDEN_CLASSNAME);
  leftNav.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}


