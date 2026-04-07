import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTable/init.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    if (inOptions.dataList.show) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

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

    initTable({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });
};

export { initRender };
