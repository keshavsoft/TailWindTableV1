import { initTable } from "./KSTableAi/V9/entry.js";

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
            vertical: {
                showVertical: false
            },
            table: {
                showFooter: true,
                footer: {
                    showDataList: true
                }
            },
            dataList: {
                show: true
            }
        },
        columnsConfig: [
            { columnName: "pk", isPrimaryKey: true, isVisible: false },
            { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
            { columnName: "LedgerType", isRequired: true }
        ],
        layout: {
            verticalPosition: "top" // or left/right/bottom
        }
    };

    await initTable(config);
};

startFunc();