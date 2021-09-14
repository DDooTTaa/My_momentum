const date = document.querySelector(".date");
const day = document.querySelector(".day");
const time = document.querySelector(".time");

const dayMap = ["일", "월", "화", "수", "목", "금", "토"];

function setDate(now) {
    const month = now.getMonth() + 1;
    const cntDate = now.getDate();
    let cntDay = now.getDay();

    day.innerText = `${dayMap[cntDay]}요일`;
    date.innerText = `${month}/${cntDate}`;
}

function setClock(now) {
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    time.innerText = `${hours}:${minutes}:${seconds}`;
}

function setNow() {
    const now = new Date();

    setDate(now);
    setClock(now);
}

function init() {
    setNow();
    setInterval(() => {
        setNow();
    }, 1000);
}

init();
