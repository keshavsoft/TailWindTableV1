import { KSAiTable } from "./ai.js";

// entry.js
export const initTable = ({ containerId, data, tableName }) => {
    return new KSAiTable({
        inTableContainerId: containerId,
        inDataAsCollection: data,
        inTableName: tableName
    });
};