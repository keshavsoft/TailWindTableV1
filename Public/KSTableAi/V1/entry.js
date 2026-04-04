import { KSAiTable } from "./ai.js";

// entry.js
export const initTable = ({ containerId, data }) => {
    return new KSAiTable({
        inTableContainerId: containerId,
        inDataAsCollection: data
    });
};