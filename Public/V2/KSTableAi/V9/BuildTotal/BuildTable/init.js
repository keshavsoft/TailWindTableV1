import { buildHeader } from "./BuildHeader/start.js";
import { buildFooter } from "./BuildFooterVersions/V2/start.js";
import { pureBuildBody } from "./BuildBody/pureBuildBody.js";

const initTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
    // debugger;
    buildHeader({
        inContainerEl,
        inDataStore,
        inDom,
        inColumnsConfig,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial
        }
    });

    pureBuildBody({
        inContainerEl,
        inColumns: columns,
        inData: data,
        inDom,
        inColumnsConfig,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });

    if (inOptions.table.showFooter) {
        buildFooter({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig
        });
    };

    // hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initTable };
