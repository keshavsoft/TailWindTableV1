// BuildHeader/start.js (orchestration only)

import { getKeys } from "../tableStore.js";
import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";
import { attachSortHandlers } from "./attachSortHandlers.js";
import { startFunc as getTHead } from "./getTHead.js";

const startFunc = () => {
    const thead = getTHead();

    thead.innerHTML = '';

    const keys = getKeys();

    const tr = createHeaderRow(keys);
    thead.appendChild(tr);

    attachSortHandlers(tr);
};

export { startFunc };