let timer;

const inputFuncToRun = (e, tableInstance) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;

        // 1. Update store
        tableInstance.store.setSearch(searchValue);

        // 2. Re-render UI
        tableInstance.renderBody();

    }, 300);
};

export { inputFuncToRun };
