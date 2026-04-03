import { startFunc as updateHeaderUI } from "./updateHeaderUI.js";
import { setSort, getFinalData, getKeys, getHtmlId } from '../tableStore.js';
import { buildTableBody } from '../methods.js';

const startFunc = () => {
    const tableContainerId = getHtmlId;
    const tableContainer = document.getElementById(tableContainerId);

    const thead = tableContainer.querySelector("table thead");

    thead.innerHTML = '';
    const tr = document.createElement('tr');
    const keys = getKeys();

    const thIndex = document.createElement('th');
    thIndex.className = 'px-4 py-2 border';
    thIndex.textContent = '#';
    tr.appendChild(thIndex);

    keys.forEach(key => {
        const th = document.createElement('th');
        th.className = 'px-4 py-2 border cursor-pointer';
        th.dataset.key = key;
        th.innerHTML = `${key} <span class="text-gray-400">↑↓</span>`;

        th.addEventListener('click', () => {
            setSort(key);

            const dataToShow = getFinalData();
            // debugger;
            buildTableBody();
            updateHeaderUI(tr, th, key); // restore arrows
        });

        tr.appendChild(th);
    });

    thead.appendChild(tr);
};

export { startFunc };