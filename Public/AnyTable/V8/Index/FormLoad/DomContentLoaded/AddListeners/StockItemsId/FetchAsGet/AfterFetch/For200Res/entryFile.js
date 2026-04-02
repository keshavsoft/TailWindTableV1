import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { startFunc as buildBody } from "../../../../buildBody.js";
import { setData, getKeys } from "../../../../tableStore.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const thead = document.getElementById('tableHead');

    setData(inResponseAsJson);
    const keys = getKeys();
    buildHeader({ thead, keys, renderBody: buildBody });
};

export { StartFunc };