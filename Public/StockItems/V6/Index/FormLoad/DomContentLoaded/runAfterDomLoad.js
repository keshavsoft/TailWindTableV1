import { hookAllListeners } from "./AddListeners/start.js";

// import { initMenu } from './menu.js';

const runAfterDomLoad = () => {
    hookAllListeners();
    // initMenu();
    // initTable();
};

export { runAfterDomLoad };