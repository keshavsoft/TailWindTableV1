import { initTable } from "./KSTableAi/V7/entry.js";

let startFunc = async () => {
    const config = {
        containerId: 'kSTableContainerForLedgers',
        tableName: "Ledgers",
        endPoints: {
            create: "/create",
            update: "",
            delete: "",
            read: "data.json"
        },
        options: {
            vertical: {
                showVertical: false
            },
            table: {
                showRowOptions: false,
                showFooter: true
            }
        }
    };
    
    await initTable(config);
};

startFunc();