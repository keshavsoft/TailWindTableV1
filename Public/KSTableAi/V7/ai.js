import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { createDomManipulation } from "./domManipulation.js";

import { render } from "./BuildTotal/start.js";

class KSAiTable {
    constructor({ inTableContainerId, inDataAsCollection, inTableName = "KeshavTable" }) {
        const isValid = validateInputs({ inTableContainerId, inDataAsCollection });
        if (!isValid) return; // 🚫 stop execution

        this.containerEl = document.getElementById(inTableContainerId);

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = createDomManipulation();

        updateStore({
            inDataAsCollection, inTableName,
            inDataStore: this.dataStore
        });

        this.uiState.setTableContainerId(inTableContainerId);

        render({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom
        });
    };
};

const updateStore = ({ inDataAsCollection, inTableName, inDataStore }) => {
    inDataStore.setData(inDataAsCollection); // ✅ move data into store
    inDataStore.setTableName(inTableName); // ✅ move data into store
};

const validateInputs = ({ inTableContainerId, inDataAsCollection }) => {
    const htmlContainer = document.getElementById(inTableContainerId);

    if (!htmlContainer) {
        console.error(`div '${inTableContainerId}' not found`);
        return false;
    };

    if (!Array.isArray(inDataAsCollection) || inDataAsCollection.length === 0) {
        console.warn("Empty or invalid data");
        return false;
    };

    return true;
};

export { KSAiTable };
