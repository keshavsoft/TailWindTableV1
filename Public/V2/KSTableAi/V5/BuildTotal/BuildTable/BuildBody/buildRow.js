import { createRow } from "./createRow.js";
import { createIndexCell } from "./createIndexCell.js";
import { createDataCell } from "./createDataCell.js";
import { createOptionsCell } from "./createOptionsCell.js";

const buildRow = ({ item, index, columns, options }) => {
    const tr = createRow();

    tr.appendChild(createIndexCell(index));

    columns.forEach((key) => {
        tr.appendChild(createDataCell(item[key]));
    });

    if (options?.showActions) {
        tr.appendChild(
            createOptionsCell({
                item,
                index,
                onEdit: options.onEdit,
                onDelete: options.onDelete
            })
        );
    }

    return tr;
};

export { buildRow };