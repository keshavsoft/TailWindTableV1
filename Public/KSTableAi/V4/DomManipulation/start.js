const getTableHeader = (tableContainer) => {
    return tableContainer.querySelector(".theadClass");
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

export {
    getTableHeader, getTableBody, getSearchInput,
    getSearchSingleColumnInput,
    getTableNameClass
};

