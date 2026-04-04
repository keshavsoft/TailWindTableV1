// import { initTable } from "https://keshavsoft.com/cdn/KsTable/V1/kstable.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    window.KSTable.init({
        containerId: "kSTableContainer",
        data: inResponseAsJson
    });

    // initTable({
    //     containerId: 'kSTableContainer',
    //     data: inResponseAsJson
    // });
};

export { StartFunc };