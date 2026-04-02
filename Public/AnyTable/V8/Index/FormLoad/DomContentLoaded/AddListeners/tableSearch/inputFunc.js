import { setSearch } from '../tableStore.js';

let timer;

const inputFuncToRun = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        setSearch(e.target.value);
    }, 300);
};

export { inputFuncToRun };
