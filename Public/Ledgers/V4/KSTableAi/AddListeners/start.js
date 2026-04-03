import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

const hookAllListeners = () => {
    funcToRunFortableSearch();
};

export { hookAllListeners };