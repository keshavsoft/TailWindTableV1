import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { createDomManipulation } from "./domManipulation.js";

import { renderTableHeading } from "./BuildTotal/BuildFirstColumn/TableHeading/start.js";
import { buildHeader } from "./BuildTotal/BuildTable/BuildHeader/start.js";
import { buildBody } from "./BuildTotal/BuildTable/BuildBody/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

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

        this.render();
        
        hookAllListeners({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom
        });
    };

    render() {
        renderTableHeading({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom
        });

        buildHeader({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom
        });

        buildBody({
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
