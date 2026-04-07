import { createFooterCell } from "./createFooterCell.js";

const startFunc = (keys, tr, options = {}) => {
    keys.forEach(key => {
        tr.appendChild(createFooterCell(key, options.onChange));
    });
};

export { startFunc };
