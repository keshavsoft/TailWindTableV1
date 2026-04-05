import { buildBodyAtThatState } from "../../BuildTotal/BuildTable/BuildBody/atThatState.js";

let timer;

const inputFuncToRun = ({ e, inDataStore, inColumns, inContainerEl, inDom }) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;

        // 1. global search
        inDataStore.setSearchConfig({
            type: "global",
            value: searchValue
        });

        const dataToShow = inDataStore.getFinalData();
        buildBodyAtThatState({
            inColumns,
            inDataToShow: dataToShow,
            inContainerEl, inDom
        });
    }, 300);
};

export { inputFuncToRun };
