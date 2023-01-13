export const toastController = () => {
    const toastTrigger = document.querySelectorAll(".toastTrigger");
    const toastBox = document.querySelector("#toastBox");

    if (toastTrigger) {
        toastTrigger.forEach((el) => {
            el.addEventListener("click", () => {
                const toastEl = new window.bootstrap.Toast(toastBox);
                toastEl.show();
            });
        });
    }
};
