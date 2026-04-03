// BuildHeader/start.js (orchestration only)

import { getKeys, getHtmlId } from "../tableStore.js";
import { createHeaderRow } from "./createHeaderRow.js";
import { attachSortHandlers } from "./attachSortHandlers.js";
import { startFunc as updateHeaderUI } from "./updateHeaderUI.js";

const startFunc = () => {
    const tableContainerId = getHtmlId();
    const tableContainer = document.getElementById(tableContainerId);

    const thead = tableContainer.querySelector("table thead");

    thead.innerHTML = '';

    const keys = getKeys();

    const tr = createHeaderRow(keys);
    thead.appendChild(tr);

    attachSortHandlers(tr);
    updateHeaderUI(tr);
};

export { startFunc };