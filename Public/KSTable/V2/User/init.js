import { setData, setSearch, setSort } from '../../../Common/Versions/V2/tableStore.js';
import { instantiate, buildTableBody } from '../../../Common/Versions/V2/methods.js';

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