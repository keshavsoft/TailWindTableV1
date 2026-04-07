// ai.js

import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { createServices } from "./Services/createServices.js";
import { render } from "./BuildTotal/start.js";
import { validateConfig } from "./Utils/validateConfig.js";

class KSAiTable {
    constructor(config) {
        validateConfig(config);

        const { containerId, options, endPoints } = config;

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);

        this.options = options;
        this.endPoints = endPoints;
    }

    async init() {
        const { tableName } = this.config;

        await hydrateData({
            cfg: this.config,
            inDataStore: this.dataStore
        });

        // set table name AFTER data ready
        this.dataStore.setTableName(tableName);

        this.services = createServices({
            tableName: this.dataStore.getTableName()
        });
        debugger;
        render({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom,
            inServices: this.services,
            inOptions: this.options,
            inEndPoints: this.endPoints
        });
    }
}

const hydrateData = async ({ cfg, inDataStore }) => {
    const { data, endPoints } = cfg;

    if (Array.isArray(data)) {
        inDataStore.setData(data);
        return;
    }

    if (endPoints?.read) {
        try {
            const res = await fetch(endPoints.read);
            const json = await res.json();

            if (!Array.isArray(json)) {
                throw new Error("read endpoint must return array");
            }

            inDataStore.setData(json);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }
};

export { KSAiTable };