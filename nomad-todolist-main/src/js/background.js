const TOTAL_IMG = 10;

function setBackground() {
    const bg = document.createElement("img");
    const randomNumber = getRandomNumber(TOTAL_IMG);

    bg.id = "bg";
    bg.src = `./img/bg${randomNumber + 1}.jpg`;

    document.body.appendChild(bg);
}

function handleInitBtn() {
    if (
        confirm(
            "모든 정보가 삭제됩니다. 진행 하시겠습니까?\nAll information will be deleted. Do you want to proceed?"
        )
    ) {
        localStorage.clear();
        location.reload();
    }
}

function init() {
    setBackground();
    document.querySelector(".initBtn").addEventListener("click", handleInitBtn);
}

init();
