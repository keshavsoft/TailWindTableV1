import { afterMutation } from "./afterMutation.js";
import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { validateRow } from "./Utils/validateRow.js";
import { showErrors } from "./DomManipulation/showErrors.js";

const clearFooterInputs = (tr) => {
    tr.querySelectorAll("input, select, textarea").forEach(el => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else {
            el.value = "";
        }
    });
};

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints }) => {
    const containerEl = inContainerEl;

    const handleSave = async (e) => {
        const tr = e.target.closest("tr");

        const payload = getFooterPayload({
            tr,
            inDataStore,
            inDom
        });

        const errors = validateRow(payload);   // ✅ ADD HERE
        if (errors.length) {
            showErrors(tr, errors);            // UI feedback
            return;
        };

        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload
        });

        clearFooterInputs(tr);   // ✅ HERE

        await afterMutation({
            inServices,
            inEndPoints,
            inDataStore,
            inContainerEl,
            inDom,
            focusFn: focusFooter
        });
    };

    const focusFooter = ({ inContainerEl }) => {
        const el = inContainerEl.querySelector(
            "tfoot input, tfoot select, tfoot textarea"
        );

        el?.focus();
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