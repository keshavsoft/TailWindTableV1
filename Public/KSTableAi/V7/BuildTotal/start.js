import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { buildTable } from "./BuildTable/start.js";
import { createForm } from "./BuildForm/createForm.js";

const render = ({ inContainerEl, inDataStore, inDom }) => {
    renderTableHeading({
        inContainerEl,
        inDataStore,
        inDom
    });

    buildTable({
        inContainerEl,
        inDataStore,
        inDom
    });

    const form = createForm({
        columns: inDataStore.getColumns(),
        onSubmit: (newItem) => {
            this.dataStore.add(newItem);
            render(); // re-render table
        }
    });

    inContainerEl.prepend(form);
};

export { render };
