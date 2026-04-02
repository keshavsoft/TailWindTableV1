import { render } from './render.js';

let data = [];
let keys = [];
let searchText = '';
let sortState = { key: null, asc: true };

const setSearch = (val) => {
    searchText = val;
    render({ keys, data: getFinalData() });
};

const setSort = (key) => {
    if (sortState.key === key) sortState.asc = !sortState.asc;
    else sortState = { key, asc: true };
    render({ keys, data: getFinalData() });
};

const setData = (inData) => {
    data = inData;
    keys = Object.keys(inData[0] || {});
    render({ keys, data: getFinalData() });
};

const getFinalData = () => {
    let result = [...data];

    // search
    if (searchText) {
        const txt = searchText.toLowerCase();
        result = result.filter(item =>
            keys.some(k =>
                (item[k] ?? '').toString().toLowerCase().includes(txt)
            )
        );
    }

    // sort
    if (sortState.key) {
        const { key, asc } = sortState;
        result.sort((a, b) => {
            const A = a[key] ?? '';
            const B = b[key] ?? '';
            if (A < B) return asc ? -1 : 1;
            if (A > B) return asc ? 1 : -1;
            return 0;
        });
    }

    return result;
};

const getKeys = () => keys;
const getSearch = () => searchText;
const getSortState = () => sortState;

export { setData, getFinalData, getKeys, setSearch, setSort, getSearch, getSortState };