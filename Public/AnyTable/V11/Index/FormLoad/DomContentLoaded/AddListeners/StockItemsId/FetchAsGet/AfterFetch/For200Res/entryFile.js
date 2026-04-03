// import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { setData, getKeys, getFinalData } from '/Common/TableEngine/tableStore.js';
import { buildTableBody } from '/Common/TableEngine/methods.js';
import { startFunc as buildHeader } from "/Common/TableEngine/BuildHeader/start.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const thead = document.getElementById('tableHead');

    setData(inResponseAsJson);

    buildHeader();
    buildTableBody();
};

export { StartFunc };