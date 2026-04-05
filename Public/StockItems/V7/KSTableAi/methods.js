import { startFunc as buildBody } from './buildBody.js';
import { getKeys, getFinalData } from './tableStore.js';
import { startFunc as buildHeader } from "./BuildHeader/start.js";
import { hookAllListeners } from "./AddListeners/start.js";

// Rebuilds table body based on current state (sort/search)
const buildTableBody = () => {
    buildBody({ keys: getKeys(), inData: getFinalData() });
};

/**
 * Application entry point
 * Runs only once:
 * - attaches all listeners (search, sort)
 * - builds static header
 * - renders initial body
 *
 * After this:
 * Only body updates happen
 */
const instantiate = () => {
    hookAllListeners();
    buildHeader();
    buildTableBody();
};

export { buildTableBody, instantiate };