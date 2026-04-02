import { getData, getKeys } from "../tableStore.js";
import { startFunc as buildBody } from "../buildBody.js";

const clickFuncToRun = (e) => {
    const keys = getKeys();
    const dataToShow = getData();

    const value = e.target.value.toLowerCase();
    
    const filtered = dataToShow.filter(item =>
        keys.some(k =>
            (item[k] ?? '').toString().toLowerCase().includes(value)
        )
    );

    buildBody({ keys, inData: filtered });
};

export { clickFuncToRun };

