const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const WEEK_DAY = ["일", "월", "화", "수", "목", "금", "토"];
    const week = WEEK_DAY[date.getDay()];
    clock.innerText = `${hours}:${minutes}:${seconds} ${week}`
}

getClock();
setInterval(getClock, 1000);