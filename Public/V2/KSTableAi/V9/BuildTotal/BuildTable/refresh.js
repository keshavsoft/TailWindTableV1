import { buildDataLists } from "../BuildDataLists/addToDom.js";
import { pureBuildBody } from "./BuildBody/pureBuildBody.js";

const refreshTable = ({ inContainerEl, inDataStore, inDom, inOptions }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();

    if (inOptions.dataList.show) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    pureBuildBody({
        inContainerEl,
        inData: data,
        inColumns: columns,
        inDom,
        options: {
            showActions: inOptions.table.showRowOptions,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });
};

export { refreshTable };
