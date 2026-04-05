export const createState = () => {
    let tableContainerId = "kSTableContainer";

    return {
        setTableContainerId(val) {
            tableContainerId = val;
        },
        getTableContainerId() {
            return tableContainerId;
        }
    };
};