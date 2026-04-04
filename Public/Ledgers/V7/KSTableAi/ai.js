import { createStore } from "./tableStore.js";
import { startFunc as BuildHeader } from "./BuildHeader/start.js";

class KSAiTable {
    constructor({ inTableContainerId, inDataAsCollection }) {
        const tableContainerHtml = document.getElementById(inTableContainerId);

        this.tableElement = tableContainerHtml.querySelector("table");

        if (!this.tableElement) {
            console.error(`Table '${tableId}' not found`);
            return;
        }

        if (!Array.isArray(inDataAsCollection) || inDataAsCollection.length === 0) {
            console.warn("Empty or invalid data");
            return;
        };

        this.store = createStore(); // ✅ UNIQUE per instance
        this.store.setData(inDataAsCollection); // ✅ move data into store
        this.store.setTableContainerId(inTableContainerId);

        this.render();
    };

    render() {
        // this.tableElement.innerHTML = '';
        const tableColumns = this.store.getColumns();
        const tableHeader = this.store.getTableHeader();

        BuildHeader({
            inColumns: tableColumns,
            inTableHeader: tableHeader
        });
        // this.createBody();
    };

    createHeader() {
        const thead = this.tableElement.createTHead();
        const row = thead.insertRow();

        this.columns = Object.keys(this.data[0]);

        this.columns.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col;
            row.appendChild(th);
        });
    }

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

export { KSAiTable };
