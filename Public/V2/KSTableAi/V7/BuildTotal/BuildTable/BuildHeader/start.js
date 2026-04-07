import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const buildHeader = ({ inDataStore, inContainerEl, inDom, options }) => {
    const containerEl = inContainerEl;

    const columns = inDataStore.getColumns();
    const tr = createHeaderRow({ inColumns: columns, options });
    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.appendChild(tr);
};

export { buildHeader };