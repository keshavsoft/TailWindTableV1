import { createForm } from "./createForm.js";
import { hookAllListeners } from "./AddListeners/start.js";

const buildForm = ({ inContainerEl, inDataStore, inDom }) => {
    const form = createForm({
        columns: inDataStore.getColumns(),
        inDataStore,
        onSubmit: (newItem) => {
            this.dataStore.add(newItem);
            render(); // re-render table
        }
    });

    inContainerEl.prepend(form);

    // hookAllListeners({ inContainerEl, inDataStore, inDom });
};

export { buildForm };
