import { setData, setSearch, setSort } from '../../../Common/Versions/V1/tableStore.js';
import { instantiate, buildTableBody } from '../../../Common/Versions/V1/methods.js';

const init = ({ data }) => {
    setData(data);
    instantiate();
};

const api = {
    init,
    search: (val) => {
        setSearch(val);
        buildTableBody();
    },
    sort: (key) => {
        setSort(key);
        buildTableBody();
    }
};

// expose safely
window.kSTableAi = api;