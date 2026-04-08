import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const buildHeader = ({ inDataStore, inContainerEl, inDom, options, inColumnsConfig }) => {
    const containerEl = inContainerEl;

    const columns = inDataStore.getColumns();
    const tr = createHeaderRow({ inColumns: columns, options, inColumnsConfig });
    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.appendChild(tr);
};

export { buildHeader };