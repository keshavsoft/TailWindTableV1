// createFooterInput.js

const createFooterInput = (key, onChange) => {
    const input = document.createElement("input");

    input.type = "text";
    input.placeholder = key;
    input.className = "w-full px-2 py-1 border rounded text-sm";
    input.setAttribute("list", "StockItemNameList");

    input.addEventListener("input", (e) => {
        onChange?.({
            key,
            value: e.target.value
        });
    });

    return input;
};

export { createFooterInput };