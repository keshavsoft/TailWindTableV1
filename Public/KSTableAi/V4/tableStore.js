export const createStore = () => {
    let data = [];
    let keys = [];
    let sortState = { key: null, asc: true };
    let tableContainerId = "kSTableContainer";
    let searchConfig = { type: "global", value: "" };
    let tableName = "";

    return {
        setData(inData) {
            data = inData;
            keys = Object.keys(inData[0] || {});
        },
        setSearchConfig(config) {
            searchConfig = config;
        },
        getSearchConfig(config) {
            return searchConfig;
        },
        getData() {
            return data;
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
        },
        getTableName() {
            return tableName;
        },
        setTableName(inTableName) {
            tableName = inTableName;
        }
    };
};