import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints }) => {
    const containerEl = inContainerEl;
    debugger;
    const handleSave = async (e) => {
        const tr = e.target.closest("tr");

        const payload = getFooterPayload({
            tr,
            inDataStore,
            inDom
        });
   
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload
        });
    };

    const columns = inDataStore.getColumns();

    const tr = createFooterRow(columns, {
        showActions: true,
        onSave: handleSave
    });

    const tableFooter = inDom.getTableFooter(containerEl);

    tableFooter.appendChild(tr);
};

const getFooterPayload = ({ tr, inDataStore, inDom }) => {
    const keys = inDataStore.getColumns();
    const payload = {};
    debugger;
    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { buildFooter };