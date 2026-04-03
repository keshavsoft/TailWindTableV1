import { startFunc as buildBody } from './buildBody.js';
import { getKeys, getFinalData } from './tableStore.js';
import { startFunc as buildHeader } from "./BuildHeader/start.js";

const buildTableBody = () => {
    buildBody({ keys: getKeys(), inData: getFinalData() });
};

const instantiate = () => {
    buildHeader();

    buildBody({ keys: getKeys(), inData: getFinalData() });
};

export { buildTableBody, instantiate };