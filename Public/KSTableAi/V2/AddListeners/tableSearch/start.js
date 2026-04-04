import { inputFuncToRun } from "./inputFunc.js";

const funcToRun = (tableInstance) => {
    const htmlElement = tableInstance.SearchInput;

    htmlElement.addEventListener("input", (e) => {
        inputFuncToRun(e, tableInstance);
    });
};

export { funcToRun };