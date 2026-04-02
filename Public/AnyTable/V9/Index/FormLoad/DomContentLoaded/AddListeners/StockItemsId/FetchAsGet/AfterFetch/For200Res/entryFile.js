import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { setData, getKeys, getFinalData } from '/Common/TableEngine/tableStore.js';
import { startFunc as buildBody } from '/Common/TableEngine/buildBody.js';
import { render } from '/Common/TableEngine/render.js';

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const thead = document.getElementById('tableHead');

    setData(inResponseAsJson);
    const keys = getKeys();
    buildHeader({ thead, keys, renderBody: buildBody });
// debugger
    const dataToShow = getFinalData();
    // debugger;
    render({ keys: getKeys(), data: dataToShow });
};

export { StartFunc };