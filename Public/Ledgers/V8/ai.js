class CustomTable {
    constructor({ inTableContainerId, inDataAsCollection }) {
        const tableContainerId = inTableContainerId;
        const data = inDataAsCollection;

        const tableContainerHtml = document.getElementById(tableContainerId);

        this.tableElement = tableContainerHtml.querySelector("table");

        if (!this.tableElement) {
            console.error(`Table '${tableId}' not found`);
            return;
        }

        if (!Array.isArray(data) || data.length === 0) {
            console.warn("Empty or invalid data");
            return;
        }

        this.data = data;
        this.render();
    }

    render() {
        this.tableElement.innerHTML = '';

        this.createHeader();
        this.createBody();
    }

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

export { CustomTable };
