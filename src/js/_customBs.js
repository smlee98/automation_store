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

export const tooltipController = () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );

    [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
};
