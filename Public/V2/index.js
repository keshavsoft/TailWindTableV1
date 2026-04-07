import { initTable } from "./KSTableAi/V7/entry.js";

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
            },
            dataList: {
                show: true
            }
        }
    };

    await initTable(config);
};

startFunc();