export const checkItems = (selectAll) => {
    const tableEl = document.querySelectorAll(".table-responsive");

    if (tableEl.length) {
        tableEl.forEach((table) => {
            const checkEl = table.querySelectorAll(".board-check");
            const allCheckEl = table.querySelector("#checkAll");
            if (checkEl.length) {
                checkEl.forEach((el) => {
                    el.addEventListener("click", function () {
                        const checkElCnt = table.querySelectorAll(
                            ".board-check:checked"
                        ).length;
                        if (checkElCnt !== checkEl.length) {
                            allCheckEl.checked = false;
                        } else {
                            allCheckEl.checked = true;
                        }
                    });
                });

                allCheckEl.addEventListener("click", function () {
                    const checkElCnt = table.querySelectorAll(
                        ".board-check:checked"
                    ).length;
                    if (checkElCnt === checkEl.length) {
                        checkEl.forEach((el) => (el.checked = false));
                    } else {
                        checkEl.forEach((el) => (el.checked = true));
                    }
                });
            }
        });
    } else {
        const checkEl = document.querySelectorAll(".board-check");
        const allCheckEl = document.querySelector("#checkAll");
        if (checkEl.length) {
            checkEl.forEach((el) => {
                el.addEventListener("click", function () {
                    const checkElCnt = document.querySelectorAll(
                        ".board-check:checked"
                    ).length;
                    if (checkElCnt !== checkEl.length) {
                        allCheckEl.checked = false;
                    } else {
                        allCheckEl.checked = true;
                    }
                });
            });

            allCheckEl.addEventListener("click", function () {
                const checkElCnt = document.querySelectorAll(
                    ".board-check:checked"
                ).length;
                if (checkElCnt === checkEl.length) {
                    checkEl.forEach((el) => (el.checked = false));
                } else {
                    checkEl.forEach((el) => (el.checked = true));
                }
            });
        }
    }
};

const nowCount = document.querySelector("#nowTyping");
const maxCount = document.querySelector("#maxTyping");
let message = "";
const MAX_MESSAGE_BYTE = 2000;

const count = (message) => {
    let totalByte = 0;

    for (let index = 0, length = message.length; index < length; index++) {
        const currentByte = message.charCodeAt(index);
        currentByte > 128 ? (totalByte += 2) : totalByte++;
    }

    return totalByte;
};

const checkByte = (e) => {
    const totalByte = count(e.target.value);

    if (totalByte <= MAX_MESSAGE_BYTE) {
        nowCount.innerHTML = totalByte.toString();
        message = e.target.value;
    } else {
        window.alert(`댓글은 ${MAX_MESSAGE_BYTE}자 까지만 입력 가능합니다.`);
        nowCount.innerHTML = count(message).toString();
        e.target.value = message;
    }
};

export const checkComment = () => {
    const commentBox = document.querySelector("#comment-box");

    if (commentBox) {
        commentBox.addEventListener("keyup", checkByte);
        maxCount.innerHTML = MAX_MESSAGE_BYTE.toString();
    }
};
