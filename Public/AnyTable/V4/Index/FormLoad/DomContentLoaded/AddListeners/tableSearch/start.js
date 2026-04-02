import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('tableSearch');

    htmlElement.addEventListener('input', clickFuncToRun);
};

export { funcToRun };
