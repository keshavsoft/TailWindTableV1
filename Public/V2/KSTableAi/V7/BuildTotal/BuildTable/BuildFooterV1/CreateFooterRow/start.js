import { startFunc as insertRowCells } from "./insertCells.js";
import { appendFooterSaveCell } from "./appendFooterSaveCell.js";

const startFunc = (keys, options) => {
    const tr = document.createElement("tr");

    tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr);

    tr.appendChild(appendFooterSaveCell(options));

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("td");
    // thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

export { startFunc };
