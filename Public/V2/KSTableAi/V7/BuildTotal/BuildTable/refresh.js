import { buildBody } from "./BuildBody/buildBody.js";
import { buildDataLists } from "../BuildDataLists/addToDom.js";

const refreshTable = ({ inContainerEl, inDataStore, inDom }) => {
    if (inOptions.dataList.show) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    buildBody({
        inContainerEl,
        inDataStore,
        inDom,
        options: {
            showActions: true,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });
};

export { refreshTable };
