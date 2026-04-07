import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = (keys) => {
    const tr = document.createElement("tr");

    tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr);

    tr.appendChild(getOptionsColumn());

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

const getOptionsColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "options";

    return thIndex
};

export { startFunc };
