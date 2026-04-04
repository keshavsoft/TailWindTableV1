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
            console.log("searchText : ", searchText);

            // 🔍 search logic
            if (searchText) {
                const parts = searchText.split(":");

                if (parts.length === 2) {
                    // ✅ column search
                    const key = parts[0].trim();
                    const value = parts[1].trim();

                    result = result.filter(row =>
                        row[key] !== undefined &&
                        String(row[key]).includes(value)
                    );

                } else {
                    // ✅ global search (your existing logic)
                    result = result.filter(row =>
                        Object.values(row).some(val =>
                            val !== undefined && val !== null &&
                            String(val).includes(searchText)
                        )
                    );
                }
            };

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