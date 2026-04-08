import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

const hookAllListeners = ({ inContainerEl, inDataStore, inDom, inOptions }) => {
    const columns = inDataStore.getColumns();

    funcToRunFortableSearch({
        inContainerEl, inDataStore,
        inDom, inColumns: columns,
        inOptions
    });
};

export { hookAllListeners };