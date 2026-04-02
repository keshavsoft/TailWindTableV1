import { setSearch, getFinalData, getKeys } from '../tableStore.js';
import { startFunc as buildBody } from '../buildBody.js';

let timer;

const inputFuncToRun = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        setSearch(e.target.value);
        buildBody({ keys: getKeys(), inData: getFinalData() });
    }, 300);
};

export { inputFuncToRun };
