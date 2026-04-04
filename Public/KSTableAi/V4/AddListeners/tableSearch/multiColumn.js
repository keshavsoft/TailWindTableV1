let timer;

const transform = (inSearchValue) => {
    const splitColumns = inSearchValue.split(",");

    return splitColumns.map(element => {
        const splitValues = element.split(":");

        return {
            key: splitValues[0],
            value: splitValues[1]
        };
    });
};

const inputFuncToRun = (e, tableInstance) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;
        const splitColumns = transform(searchValue);

        // 3. multi column
        tableInstance.store.setSearch({
            type: "multi",
            filters: splitColumns
        });

        // 2. Re-render UI
        tableInstance.renderBody();

    }, 300);
};

export { inputFuncToRun };
