import { setSort } from "../tableStore.js";
import { buildTableBody } from "../methods.js";
import { updateHeaderUI } from "./updateHeaderUI.js";

// 🔹 One clear story
const handleSortClick = (tr, th) => {
    const key = th.dataset.key;

    setSort(key);           // 1. update state
    buildTableBody();       // 2. rebuild table
    updateHeaderUI(tr, th, key); // 3. update header UI
};

export const attachSortHandlers = (tr) => {
    tr.querySelectorAll("th[data-key]").forEach(th => {
        th.addEventListener("click", () => handleSortClick(tr, th));
    });
};