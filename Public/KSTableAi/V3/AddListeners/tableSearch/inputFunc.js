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
        const splitValues = searchValue.split(":");
        const splitColumns = transform(searchValue);

        // 1. global search
        tableInstance.store.setSearch({
            type: "global",
            value: searchValue
        });

        // // 2. single column search
        // tableInstance.store.setSearch({
        //     type: "column",
        //     key: splitValues[0],
        //     value: splitValues[1]
        // });

        // // 3. multi column
        // tableInstance.store.setSearch({
        //     type: "multi",
        //     filters: splitColumns
        // });

        // setSearch({
        //     type: "multi",
        //     filters: [
        //         { key: "LedgerName", value: "Sales" },
        //         { key: "LedgerType", value: "Ledger" }
        //     ]
        // });

        // 2. Re-render UI
        tableInstance.renderBody();

    }, 300);
};

export { inputFuncToRun };
