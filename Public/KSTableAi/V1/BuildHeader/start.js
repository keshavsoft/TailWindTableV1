// BuildHeader/start.js (orchestration only)

import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const startFunc = ({ inColumns, inTableHeader }) => {
    const tr = createHeaderRow(inColumns);
    inTableHeader.appendChild(tr);

    // attachSortHandlers();
};

export { startFunc };