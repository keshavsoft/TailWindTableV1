import { startFunc as buildHeader } from "./buildHeader.js";
import { startFunc as buildBody } from "./buildBody.js";

let dataToShow;

let StartFunc = ({ inResponseAsJson }) => {
    dataToShow = inResponseAsJson;

    const tbody = document.getElementById('tableBody');
    const thead = document.getElementById('tableHead');

    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const keys = Object.keys(inResponseAsJson[0]);

    buildHeader({
        thead, keys, dataRef: dataToShow,
        renderBody: buildBody
    });

    buildBody({ inResponseAsJson, keys, inData: dataToShow });
};

export { StartFunc };