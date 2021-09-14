const searchBox = document.querySelector(".searchBox");

function handleSubmit(event) {
    event.preventDefault();

    const input = searchBox.querySelector("input");
    let term = input.value;

    term = term.replace(/ /gi, "+");
    window.open(`https://www.google.com/search?q=${term}`);
    input.value = "";
}

searchBox.addEventListener("submit", handleSubmit);
