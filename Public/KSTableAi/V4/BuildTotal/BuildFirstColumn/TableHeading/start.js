const startFunc = (inThis) => {
    const tableName = inThis.store.getTableName();
    const tableContainer = inThis.tableContainer
    const tableNameClass = inThis.state.getTableNameClass();

    const find = tableContainer.querySelector(`.${tableNameClass}`);

    find.innerHTML = tableName;
};

export { startFunc };