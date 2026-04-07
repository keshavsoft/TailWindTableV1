import { buildHeader } from "./BuildHeader/start.js";
// import { buildBody } from "./BuildBody/buildBody.js";
import { buildFooter } from "./BuildFooterVersions/V1/start.js";
import { pureBuildBody } from "./BuildBody/pureBuildBody.js";

import { hookAllListeners } from "./AddListeners/start.js";

const initTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();

    buildHeader({
        inContainerEl,
        inDataStore,
        inDom,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial
        }
    });

    // buildBody({
    //     inContainerEl,
    //     inDataStore,
    //     inDom,
    //     options: {
    //         showActions: inOptions.table.showRowOptions,
    //         showSerial: inOptions.table.showSerial,
    //         onEdit: ({ item }) => console.log("edit", item),
    //         onDelete: ({ index }) => console.log("delete", index)
    //     }
    // });

    pureBuildBody({
        inContainerEl,
        inColumns: columns,
        inData: data,
        inDom,
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
            inEndPoints
        });
    };

    hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initTable };
