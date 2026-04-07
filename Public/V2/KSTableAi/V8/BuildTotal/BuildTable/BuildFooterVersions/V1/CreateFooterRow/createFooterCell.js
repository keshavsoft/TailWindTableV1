// createFooterCell.js

import { createFooterInput } from "./createFooterInput.js";

const createFooterCell = (key, onChange) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border";

    const input = createFooterInput(key, onChange);
    td.appendChild(input);

    return td;
};

export { createFooterCell };