import { inputFuncToRun } from "./inputFunc.js";
import { inputFuncToRun as singleColumn } from "./singleColumn.js";
import { inputFuncToRun as multiColumn } from "./multiColumn.js";

const funcToRun = (tableInstance) => {
    const htmlElement = tableInstance.SearchInput;

    htmlElement.addEventListener("input", (e) => {
        inputFuncToRun(e, tableInstance);
    });
    debugger;
    const htmlElement1 = tableInstance.searchSingleColumnInput;

    htmlElement1.addEventListener("input", (e) => {
        singleColumn(e, tableInstance);
    });

    const htmlElement2 = tableInstance.searchMultiColumnInput;

    htmlElement2.addEventListener("input", (e) => {
        multiColumn(e, tableInstance);
    });

};

export { funcToRun };