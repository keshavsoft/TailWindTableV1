import { KSAiTable } from "/KSTableAi/V1/ai.js";

let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    new KSAiTable({
        inTableContainerId: 'kSTableContainer',
        inDataAsCollection: inResponseAsJson
    });

    // window.kSTableAi.init({ data: inResponseAsJson });
};

export { StartFunc };