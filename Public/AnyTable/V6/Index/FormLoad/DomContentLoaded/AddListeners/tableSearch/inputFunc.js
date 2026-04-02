import { setSearch, getFinalData, getKeys } from '../tableStore.js';
import { startFunc as buildBody } from '../buildBody.js';

const inputFuncToRun1 = (e) => {
    const value = e.target.value;

    setSearch(value);

    const data = getData();
    const keys = getKeys();
    const searchText = getSearch().toLowerCase();

    const filtered = data.filter(item =>
        keys.some(k =>
            (item[k] ?? '').toString().toLowerCase().includes(searchText)
        )
    );

    buildBody({ keys, inData: filtered });
};

const inputFuncToRun = (e) => {
    setSearch(e.target.value);

    buildBody({
        keys: getKeys(),
        inData: getFinalData()
    });
};

export { inputFuncToRun };