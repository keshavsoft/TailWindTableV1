import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

import { funcToRun as funcToRunForStockItemsId } from "./StockItemsId/start.js";

const hookAllListeners = () => {
    funcToRunFortableSearch();
    funcToRunForStockItemsId();
};

export { hookAllListeners };