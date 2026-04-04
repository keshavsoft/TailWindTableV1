import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

const hookAllListeners = (tableInstance) => {
    funcToRunFortableSearch(tableInstance);
};

export { hookAllListeners };