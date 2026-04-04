// import { initTable } from "https://keshavsoft.com/cdn/KsTable/V1/kstable.js";
import { initTable } from "/KSTableAi/V4/entry.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    // window.KSTable.init({
    //     containerId: "kSTableContainer",
    //     data: inResponseAsJson
    // });

    initTable({
        containerId: 'kSTableContainer',
        data: inResponseAsJson,
        tableName: "Ledgers"
    });
};

export { StartFunc };