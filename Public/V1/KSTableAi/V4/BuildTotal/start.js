import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { buildTable } from "./BuildTable/start.js";
import { buildForm } from "./BuildForm/start.js";

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

    buildForm({
        inContainerEl,
        inDataStore,
        inDom
    });
};

export { render };
