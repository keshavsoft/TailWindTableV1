import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const buildHeader = ({ inDataStore, inContainerEl, inDom }) => {
    const containerEl = inContainerEl;

    const columns = inDataStore.getColumns();
    const tr = createHeaderRow(columns);
    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.appendChild(tr);
};

export { buildHeader };