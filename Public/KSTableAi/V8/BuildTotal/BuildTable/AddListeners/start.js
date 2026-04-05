import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

const hookAllListeners = ({ inContainerEl, inDataStore, inDom }) => {
    const columns = inDataStore.getColumns();

    funcToRunFortableSearch({
        inContainerEl, inDataStore,
        inDom, inColumns: columns
    });
};

export { hookAllListeners };