import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const startFunc = (inThis) => {
    const columns = inThis.store.getColumns();
    const tr = createHeaderRow(columns);
    const tableHeader = inThis.domManipulation.getTableHeader(inThis.tableContainer);

    // getTableHeader

    tableHeader.appendChild(tr);
};

export { startFunc };