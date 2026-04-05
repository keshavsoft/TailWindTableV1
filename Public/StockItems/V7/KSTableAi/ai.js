import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { getTableHeader } from "./DomManipulation/start.js";

import { startFunc as BuildHeader } from "./BuildHeader/start.js";
import { startFunc as buildBody } from "./buildBody.js";

class KSAiTable {
    constructor({ inTableContainerId, inDataAsCollection }) {
        const isValid = validateInputs({ inTableContainerId, inDataAsCollection });
        if (!isValid) return; // 🚫 stop execution

        this.tableContainer = document.getElementById(inTableContainerId);
        this.store = createStore(); // ✅ UNIQUE per instance
        this.state = createState(); // ✅ UNIQUE per instance

        this.store.setData(inDataAsCollection); // ✅ move data into store
        this.state.setTableContainerId(inTableContainerId);

        this.render();
    };

    render() {
        const tableColumns = this.store.getColumns();
        const tableHeader = getTableHeader(this.tableContainer);

        BuildHeader({
            inColumns: tableColumns,
            inTableHeader: tableHeader
        });

        buildBody({
            keys: this.store.getColumns(),
            inData: this.store.getFinalData()
        });
        // this.createBody();
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
