import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = (keys) => {
    const tr = document.createElement("tr");
    tr.className =
        "bg-white/80 backdrop-blur border-b border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05)]";

    // show serial number column
    tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr);

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

export { startFunc };