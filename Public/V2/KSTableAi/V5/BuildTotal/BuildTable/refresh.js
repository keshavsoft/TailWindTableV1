import { buildBody } from "./BuildBody/buildBody.js";

const refreshTable = ({ inContainerEl, inDataStore, inDom }) => {
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
