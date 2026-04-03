import { startFunc as buildBody } from './buildBody.js';
import { getKeys, getFinalData } from './tableStore.js';

const buildTableBody = () => {
    buildBody({ keys: getKeys(), inData: getFinalData() });
};

export { buildTableBody };