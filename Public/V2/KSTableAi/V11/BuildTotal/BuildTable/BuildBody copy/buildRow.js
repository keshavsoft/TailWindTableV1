import { createRow } from "./createRow.js";
import { createIndexCell } from "./createIndexCell.js";
import { createDataCell } from "./createDataCell.js";
import { createOptionsCell } from "./createOptionsCell.js";

const buildRow = ({ item, index, columns, options, searchValue, inColumnsConfig }) => {
    const tr = createRow();

    appendSerialCell(tr, options?.showSerial, index);

    const visibleColumns = getVisibleColumns(columns, inColumnsConfig);
    appendDataCells({ tr, item, columns: visibleColumns, searchValue });
    // appendDataCells({ tr, columns, inColumnsConfig, searchValue, item });
    appendActionCell({ tr, item, index, columns, options, searchValue, inColumnsConfig });

    return tr;
};

const appendSerialCell = (tr, showSerial, index) => {
    if (showSerial) {
        tr.appendChild(createIndexCell(index));
    };
};

const getVisibleColumns = (columns, inColumnsConfig) => {
    const map = Object.fromEntries(inColumnsConfig.map(c => [c.columnName, c]));
    return columns.filter(key => map[key]?.isVisible !== false);
};

const appendDataCells = ({ tr, item, columns, searchValue }) => {
    columns.forEach((key) => {
        tr.appendChild(createDataCell({
            value: item[key],
            searchValue
        }));
    });
};

const appendActionCell = ({ tr, item, index, columns, options, searchValue, inColumnsConfig }) => {
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
};

export { buildRow };
