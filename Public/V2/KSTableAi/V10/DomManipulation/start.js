export const getDomManipulation = () => {

    const getTableHeader = (tableContainer) => {
        return tableContainer.querySelector(".theadClass");
    };

    const getTableFooter = (tableContainer) => {
        return tableContainer.querySelector(".tFootClass");
    };

    const getTableBody = (tableContainer) => {
        return tableContainer.querySelector(".tbodyClass");
    };

    const getSearchInput = (tableContainer) => {
        return tableContainer.querySelector(".tableSearchClass");
    };

    const getSearchSingleColumnInput = (tableContainer) => {
        return tableContainer.querySelector(".tableSearchSingleColumnClass");
    };

    const getTableNameClass = (tableContainer) => {
        return tableContainer.querySelector(".tableNameClass");
    };

    const getDataListContainerClass = (tableContainer) => {
        return tableContainer.querySelector(".dataListContainerClass");
    };

    const getInputValueFromRow1 = (tr, key) => {
        const findInputs = tr.querySelectorAll(`[data-name="${key}"]`)?.value || "";
        debugger
        return findInputs;
    };

    const getInputValueFromRow = (tr, key) => {
        return tr.querySelector(`[name="${key}"]`)?.value || "";
    };

    return {
        getTableHeader, getTableBody, getSearchInput,
        getSearchSingleColumnInput,
        getTableNameClass, getTableFooter, getDataListContainerClass,
        getInputValueFromRow
    };
};
