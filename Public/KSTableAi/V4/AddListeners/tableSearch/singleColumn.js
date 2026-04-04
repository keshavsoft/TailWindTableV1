let timer;

const inputFuncToRun = (e, tableInstance) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;
        const splitValues = searchValue.split(":");

        // 2. single column search
        tableInstance.store.setSearch({
            type: "column",
            key: splitValues[0],
            value: splitValues[1]
        });

        // 2. Re-render UI
        tableInstance.renderBody();

    }, 300);
};

export { inputFuncToRun };
