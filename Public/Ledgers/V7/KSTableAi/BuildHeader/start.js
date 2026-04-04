// BuildHeader/start.js (orchestration only)

// import { getKeys } from "../tableStore.js";
import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";
// import { attachSortHandlers } from "./attachSortHandlers.js";
// import { startFunc as getTHead } from "./getTHead.js";

const startFunc = ({ inColumns, inTableHeader }) => {
    const tr = createHeaderRow(inColumns);
    inTableHeader.appendChild(tr);

    // attachSortHandlers();
};

export { startFunc };