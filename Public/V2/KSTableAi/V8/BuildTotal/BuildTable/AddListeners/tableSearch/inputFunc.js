import { pureBuildBody } from "../../BuildBody/pureBuildBody.js";

let timer;

const inputFuncToRun = ({ e, inDataStore, inColumns, inContainerEl, inDom, inOptions }) => {
    const columns = inColumns;

    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;

        // 1. global search
        inDataStore.setSearchConfig({
            type: "global",
            value: searchValue
        });

        const dataToShow = inDataStore.getFinalData();

        pureBuildBody({
            inContainerEl,
            inColumns: columns,
            inData: dataToShow,
            inDom,
            searchValue,
            options: {
                showActions: inOptions.table.showRowOptions,
                showSerial: inOptions.table.showSerial,
                onEdit: ({ item }) => console.log("edit", item),
                onDelete: ({ index }) => console.log("delete", index)
            }
        });
    }, 300);
};

export { inputFuncToRun };
