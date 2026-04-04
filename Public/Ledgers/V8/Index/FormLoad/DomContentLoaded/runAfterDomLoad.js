import { hookAllListeners } from "./AddListeners/start.js";

// import { initMenu } from './menu.js';
// import { initTable } from './table.js';

const runAfterDomLoad = () => {
    hookAllListeners();
    // initMenu();
    // initTable();
};

export { runAfterDomLoad };