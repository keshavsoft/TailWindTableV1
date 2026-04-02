import { inputFuncToRun } from "./inputFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('tableSearch');

    htmlElement.addEventListener('input', inputFuncToRun);
};

export { funcToRun };
