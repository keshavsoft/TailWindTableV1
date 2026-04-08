import { initTable } from "./KSTableAi/V10/entry.js";

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
                showFooter: false,
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
            { columnName: "LedgerType", isRequired: true },
            { columnName: "pk", isPrimaryKey: true, isVisible: true }
        ],
        layout: {
            verticalPosition: "top" // or left/right/bottom
        }
    };

    await initTable(config);
};

startFunc();