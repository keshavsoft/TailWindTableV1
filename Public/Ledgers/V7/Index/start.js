import { startFormLoad } from "./FormLoad/start.js";

function startApp() {
    startFormLoad();
};

startApp();



// Usage
new CustomTable('myTableId', [
    { Name: "Keshav", Age: 25 }
]);

new CustomTable('LedgersTableId', [
    { LedgerName: "Keshav Nalame", Amount: 1000 }
]);