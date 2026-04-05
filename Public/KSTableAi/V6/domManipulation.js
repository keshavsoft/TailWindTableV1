export const createDomManipulation = () => {
    const getTableHeader = (tableContainer) => {
        return tableContainer.querySelector(".theadClass");
    };

    const getTableBody = (tableContainer) => {
        return tableContainer.querySelector(".tbodyClass");
    };

    const getSearchInput = (tableContainer) => {
        return tableContainer.querySelector(".tableSearchClass");
    };

    const getTableNameClass = (tableContainer) => {
        return tableContainer.querySelector(".tableNameClass");
    };

    return {
        getTableHeader, getTableBody, getSearchInput,
        getTableNameClass
    };
};