import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { startFunc as buildBody } from "../../../../buildBody.js";
import { setData, getFinalData } from "../../../../tableStore.js";

let StartFunc = ({ inResponseAsJson }) => {
    setData(inResponseAsJson)
    const dataToShow = getFinalData();

    const tbody = document.getElementById('tableBody');
    const thead = document.getElementById('tableHead');

    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const keys = Object.keys(inResponseAsJson[0]);

    buildHeader({
        thead, keys,
        renderBody: buildBody
    });

    buildBody({ inData: dataToShow, keys });
};

export { StartFunc };