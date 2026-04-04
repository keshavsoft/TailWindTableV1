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

const getSearchMultiColumnInput = (tableContainer) => {
    return tableContainer.querySelector(".tableSearchMultiColumnClass");
};

export {
    getTableHeader, getTableBody, getSearchInput,
    getSearchSingleColumnInput, getSearchMultiColumnInput
};