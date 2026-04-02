// tableStore.js
let data = [];
let keys = [];

const setData = (inData) => {
    data = inData;
    keys = Object.keys(inData[0] || {});
};

const getData = () => data;

const getKeys = () => keys;

export { setData, getData, getKeys };