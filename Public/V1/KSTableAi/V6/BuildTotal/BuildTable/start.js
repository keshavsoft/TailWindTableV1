import { buildHeader } from "./BuildHeader/start.js";
import { buildBody } from "./BuildBody/buildBody.js";
import { buildFooter } from "./BuildFooter/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

const buildTable = ({ inContainerEl, inDataStore, inDom }) => {
    buildHeader({
        inContainerEl,
        inDataStore,
        inDom
    });

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
    // debugger
    buildFooter({
        inContainerEl,
        inDataStore,
        inDom,
        options: {
            showActions: true,
            onSave: ({ item }) => console.log("edit", item)
        }
    });

    hookAllListeners({ inContainerEl, inDataStore, inDom });
};

export { buildTable };
