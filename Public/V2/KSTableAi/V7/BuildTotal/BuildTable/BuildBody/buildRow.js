import { createRow } from "./createRow.js";
import { createIndexCell } from "./createIndexCell.js";
import { createDataCell } from "./createDataCell.js";
import { createOptionsCell } from "./createOptionsCell.js";

const buildRow = ({ item, index, columns, options, searchValue }) => {
    const tr = createRow();

    if (options?.showSerial) tr.appendChild(createIndexCell(index));

    columns.forEach((key) => {
        tr.appendChild(createDataCell({
            value: item[key],
            searchValue
        }));
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
    };

    return tr;
};

export { buildRow };