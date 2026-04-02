import { startFunc as updateHeaderUI } from "./updateHeaderUI.js";
import { setSort, getFinalData, getKeys } from '/Common/TableEngine/tableStore.js';
import { render } from '/Common/TableEngine/render.js';

const startFunc = ({ thead, keys, renderBody }) => {
    thead.innerHTML = '';
    const tr = document.createElement('tr');

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
            render({ keys: getKeys(), data: dataToShow });
            updateHeaderUI(tr, th, key); // restore arrows
        });

        tr.appendChild(th);
    });

    thead.appendChild(tr);
};

export { startFunc };

