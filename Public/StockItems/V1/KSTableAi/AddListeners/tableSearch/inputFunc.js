import { setSearch } from '../../tableStore.js';
import { buildTableBody } from '../../methods.js';

let timer;

const inputFuncToRun = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        setSearch(e.target.value);

        buildTableBody();
    }, 300);
};

export { inputFuncToRun };
