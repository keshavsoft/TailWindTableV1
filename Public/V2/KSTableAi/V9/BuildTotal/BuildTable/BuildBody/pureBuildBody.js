import { buildRow } from "./buildRow.js";

const pureBuildBody = ({ inData, inColumns, inContainerEl, inDom, options, searchValue = "", inColumnsConfig }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    const data = inData;
    const columns = inColumns;

    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const row = buildRow({ item, index, columns, options, searchValue, inColumnsConfig });
        tableBody.appendChild(row);
    });
};

export { pureBuildBody };