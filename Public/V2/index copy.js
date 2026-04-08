import { initTable } from "./KSTableAi/V11/entry.js";

let startFunc = async () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "Ledgers",
        endPoints: {
            create: "/Ledgers/V1/Insert",
            update: "",
            delete: "",
            read: "/Ledgers/V1/ShowAll/Get"
        },
        options: {
            firstRow: {
                showSearch: true
            },
            vertical: {
                showVertical: false
            },
            table: {
                showSerial: true,
                showFooter: true,
                footer: {
                    showDataList: true
                }
            },
            dataList: {
                show: false
            }
        },
        columnsConfig: [
            { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
            { columnName: "LedgerType", isRequired: false },
            { columnName: "pk", isPrimaryKey: true, isVisible: true }
        ],
        layout: {
            verticalPosition: "top" // or left/right/bottom
        }
    };

    await initTable(config);
};

startFunc();