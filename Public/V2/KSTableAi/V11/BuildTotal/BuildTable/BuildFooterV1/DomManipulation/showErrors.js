// DomManipulation/showErrors.js
const showErrors = (tr, errors) => {
    clearErrors(tr);

    let firstInput = null;

    errors.forEach(({ field, message }, index) => {
        const input = tr.querySelector(`[name="${field}"]`);
        if (!input) return;

        if (!firstInput) firstInput = input; // capture first

        input.classList.add("border-red-500");

        const errEl = document.createElement("div");
        errEl.className = "text-red-500 text-xs mt-1 ks-error";
        errEl.textContent = message;

        input.parentElement.appendChild(errEl);
    });

    // 👉 focus + optional select
    if (firstInput) {
        firstInput.focus();
        firstInput.select?.();
    }
};

const clearErrors = (tr) => {
    tr.querySelectorAll(".ks-error").forEach(el => el.remove());
    tr.querySelectorAll(".border-red-500")
        .forEach(el => el.classList.remove("border-red-500"));
};

export { showErrors, clearErrors };