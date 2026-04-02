import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { startFunc as buildBody } from "../../../../buildBody.js";
import { setData, getFinalData, getKeys } from "../../../../tableStore.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    setData(inResponseAsJson)
    const dataToShow = getFinalData();
    const keys = getKeys();

    const thead = document.getElementById('tableHead');

    buildHeader({
        thead, keys,
        renderBody: buildBody
    });

    buildBody({ inData: dataToShow, keys });
};

export { StartFunc };