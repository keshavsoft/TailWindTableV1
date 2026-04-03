import { inputFuncToRun } from "./inputFunc.js";
import { getHtmlId } from "../../tableStore.js";

const funcToRun = () => {
    const tableContainerId = getHtmlId();
    const tableContainer = document.getElementById(tableContainerId);

    const htmlElement = tableContainer.querySelector("#tableSearch");

    htmlElement.addEventListener('input', inputFuncToRun);
};

export { funcToRun };
