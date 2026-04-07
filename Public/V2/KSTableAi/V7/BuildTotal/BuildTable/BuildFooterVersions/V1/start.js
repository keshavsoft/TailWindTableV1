import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { saveFooterRow } from "./saveFooterRow.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints }) => {

    const handleSave = async (e) => {
        const tr = e.target.closest("tr");

        await saveFooterRow({
            tr,
            inDataStore,
            inDom,
            inServices,
            inEndPoints,
            inContainerEl
        });
    };

    const columns = inDataStore.getColumns();

    const tr = createFooterRow(columns, {
        showActions: true,
        onSave: handleSave
    });

    const tableFooter = inDom.getTableFooter(inContainerEl);
    tableFooter.appendChild(tr);
};

export { buildFooter };
