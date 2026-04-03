import { setSearch } from '/Common/TableEngine/tableStore.js';
import { buildTableBody } from '/Common/TableEngine/methods.js';

let timer;

const inputFuncToRun = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        setSearch(e.target.value);

        buildTableBody();
    }, 300);
};

export { inputFuncToRun };
