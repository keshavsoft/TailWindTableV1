import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, options }) => {
    const containerEl = inContainerEl;

    const columns = inDataStore.getColumns();
    const tr = createFooterRow(columns, options);
    const tableHeader = inDom.getTableFooter(containerEl);

    tableHeader.appendChild(tr);
};

export { buildFooter };