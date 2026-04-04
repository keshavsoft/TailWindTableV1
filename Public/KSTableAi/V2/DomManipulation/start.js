const getTableHeader = (tableContainer) => {
    return tableContainer.querySelector(".theadClass");
};

const getTableBody = (tableContainer) => {
    return tableContainer.querySelector(".tbodyClass");
};

const getSearchInput = (tableContainer) => {
    return tableContainer.querySelector(".tableSearchClass");
};

export {
    getTableHeader, getTableBody, getSearchInput
};