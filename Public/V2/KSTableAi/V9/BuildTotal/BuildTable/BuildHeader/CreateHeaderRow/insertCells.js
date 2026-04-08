import { createHeaderCell } from "./CreateHeaderCell/start.js";

const startFunc = ({ inColumns, tr, options = {}, inColumnsConfig }) => {

    const visibleKeys = inColumns.filter(key => {
        const col = inColumnsConfig.find(c => c.columnName === key);
        return col?.isVisible !== false; // ✅ hide if false
    });

    visibleKeys.forEach(key => {
        tr.appendChild(createHeaderCell(key));
    });
};

export { startFunc };