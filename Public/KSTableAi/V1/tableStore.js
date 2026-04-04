export const createStore = () => {
    let data = [];
    let keys = [];
    let searchText = "";
    let sortState = { key: null, asc: true };
    let tableContainerId = "kSTableContainer";

    return {
        setData(inData) {
            data = inData;
            keys = Object.keys(inData[0] || {});
        },
        getFinalData() {
            let result = [...data];
            // search + sort logic
            return result;
        },
        setSearch(val) {
            searchText = val;
        },
        setTableContainerId(val) {
            tableContainerId = val;
        },
        getTableContainerId() {
            return tableContainerId;
        },
        getTableHeader() {
            const tableContainerHtml = document.getElementById(tableContainerId);

            return tableContainerHtml.querySelector("table thead");
        },
        getColumns() {
            return keys;
        }
    };
};