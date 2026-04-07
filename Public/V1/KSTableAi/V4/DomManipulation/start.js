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

    return {
        getTableHeader, getTableBody, getSearchInput,
        getSearchSingleColumnInput,
        getTableNameClass, getTableFooter
    };
};
