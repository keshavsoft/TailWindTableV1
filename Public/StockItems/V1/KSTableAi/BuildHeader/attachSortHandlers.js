// NEW: attachSortHandlers.js

import { setSort } from "../tableStore.js";
import { buildTableBody } from "../methods.js";

export const attachSortHandlers = (tr) => {
    tr.querySelectorAll("th[data-key]").forEach(th => {
        th.addEventListener("click", () => {
            const key = th.dataset.key;
            setSort(key);
            buildTableBody();
        });
    });
};