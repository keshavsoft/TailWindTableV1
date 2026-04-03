import { setSort } from "../tableStore.js";
import { buildTableBody } from "../methods.js";
import { updateHeaderUI } from "./updateHeaderUI.js";

/**
 * Handles what should happen when a user clicks a column header
 * Flow:
 * 1. Update sort state
 * 2. Rebuild table body based on new sort
 * 3. Reflect UI changes in header (active column + direction)
 */
const handleHeaderSort = (headerRow, headerCell) => {
    const key = headerCell.dataset.key;

    setSort(key);
    buildTableBody();
    updateHeaderUI(headerRow, headerCell, key);
};
const getSortableHeaders = (headerRow) => {
    return headerRow.querySelectorAll("th[data-key]");
};

/**
 * Attaches sorting behavior to a header row (<tr>)
 * Every <th data-key> becomes clickable and triggers sorting
 */
const attachSortHandlers = (headerRow) => {
    const sortableHeaders = getSortableHeaders(headerRow);

    sortableHeaders.forEach(headerCell => {
        headerCell.addEventListener("click", (e) => {
            handleHeaderSort(headerRow, e.currentTarget);
        });
    });
};

export { attachSortHandlers };