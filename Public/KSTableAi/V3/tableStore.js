export const createStore = () => {
    let data = [];
    let keys = [];
    let searchText = "";
    let sortState = { key: null, asc: true };
    let tableContainerId = "kSTableContainer";
    let searchConfig = { type: "global", value: "" };

    return {
        setData(inData) {
            data = inData;
            keys = Object.keys(inData[0] || {});
        },
        setSearch(config) {
            searchConfig = config;
        },
        getFinalData() {
            let result = [...data];
            console.log("searchConfig : ", searchConfig);

            if (searchConfig.value || searchConfig.filters?.length) {
                if (searchConfig.type === "global") {
                    result = result.filter(row =>
                        Object.values(row).some(val =>
                            val !== undefined && val !== null &&
                            String(val).includes(searchConfig.value)
                        )
                    );
                }

                if (searchConfig.type === "column") {
                    result = result.filter(row =>
                        row[searchConfig.key] !== undefined &&
                        String(row[searchConfig.key]).includes(searchConfig.value)
                    );
                }

                if (searchConfig.type === "multi") {
                    result = result.filter(row =>
                        searchConfig.filters.every(f =>
                            row[f.key] !== undefined &&
                            String(row[f.key]).includes(f.value)
                        )
                    );
                }
            };

            return result;
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