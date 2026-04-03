import { funcToRun as funcToRunForStockItemsId } from "./StockItemsId/start.js";

const hookAllListeners = () => {
    funcToRunForStockItemsId();
};

export { hookAllListeners };