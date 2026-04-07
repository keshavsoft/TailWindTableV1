import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { buildTable } from "./BuildTable/start.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";

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

    buildDataLists({
        inContainerEl,
        inDataStore,
        inDom
    });
};

export { render };
