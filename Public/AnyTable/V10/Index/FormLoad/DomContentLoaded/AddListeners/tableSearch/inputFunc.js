import { render } from '/Common/TableEngine/render.js';
import { setSearch, getKeys, getFinalData } from '/Common/TableEngine/tableStore.js';

let timer;

const inputFuncToRun = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        setSearch(e.target.value);

        const dataToShow = getFinalData();
        debugger;
        render({ keys: getKeys(), data: dataToShow });
    }, 300);
};

export { inputFuncToRun };
