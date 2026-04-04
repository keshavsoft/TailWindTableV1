import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import {
    getTableBody, getTableHeader, getSearchInput,
    getTableNameClass
} from "./DomManipulation/start.js";

import { applySearch } from "./searchEngine.js";

import { startFunc as BuildHeader } from "./BuildHeader/start.js";
import { startFunc as buildBody } from "./buildBody.js";
import { startFunc as BuildFirstColumn } from "./BuildTotal/BuildFirstColumn/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

class KSAiTable {
    constructor({ inTableContainerId, inDataAsCollection, inTableName = "KeshavTable" }) {
        const isValid = validateInputs({ inTableContainerId, inDataAsCollection });
        if (!isValid) return; // 🚫 stop execution

        this.tableContainer = document.getElementById(inTableContainerId);
        this.store = createStore(); // ✅ UNIQUE per instance
        this.state = createState(); // ✅ UNIQUE per instance

        this.store.setData(inDataAsCollection); // ✅ move data into store
        this.state.setTableContainerId(inTableContainerId);
        this.store.setTableName(inTableName); // ✅ move data into store

        this.SearchInput = getSearchInput(this.tableContainer);
        this.tableNameLabel = getTableNameClass(this.tableContainer);

        this.render();
        hookAllListeners(this);
    };

    render() {
        BuildFirstColumn({
            inTableName: this.store.getTableName(),
            inTableContainer: this.tableContainer
        });

        const tableColumns = this.store.getColumns();
        const tableHeader = getTableHeader(this.tableContainer);

        BuildHeader({
            inColumns: tableColumns,
            inTableHeader: tableHeader
        });

        this.renderBody();
    };

    renderBody() {
        const data = this.store.getData();
        const searchConfig = this.store.getSearchConfig();

        const finalData = applySearch({
            data,
            searchConfig
        });

        buildBody({
            keys: this.store.getColumns(),
            inData: finalData,
            inTableBody: getTableBody(this.tableContainer)
        });
    };

    createBody() {
        const tbody = this.tableElement.createTBody();

        this.data.forEach(rowData => {
            const row = tbody.insertRow();

            this.columns.forEach(col => {
                const cell = row.insertCell();
                cell.textContent = rowData[col];
            });
        });
    }
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
