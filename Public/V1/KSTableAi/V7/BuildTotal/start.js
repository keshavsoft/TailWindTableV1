import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { buildTable } from "./BuildTable/start.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";

const render = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    debugger;
    buildDataLists({
        inContainerEl,
        inDataStore,
        inDom
    });

    if (inOptions.vertical.showVertical) {
        buildForm({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    renderTableHeading({
        inContainerEl,
        inDataStore,
        inDom
    });

    buildTable({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });
};

export { render };
