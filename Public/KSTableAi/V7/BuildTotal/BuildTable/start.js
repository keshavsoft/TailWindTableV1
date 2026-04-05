import { buildHeader } from "./BuildHeader/start.js";
import { buildBody } from "./BuildBody/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

const buildTable = ({ inContainerEl, inDataStore, inDom }) => {
    buildHeader({
        inContainerEl,
        inDataStore,
        inDom
    });

    buildBody({
        inContainerEl,
        inDataStore,
        inDom
    });

    hookAllListeners({ inContainerEl, inDataStore, inDom });
};

export { buildTable };
