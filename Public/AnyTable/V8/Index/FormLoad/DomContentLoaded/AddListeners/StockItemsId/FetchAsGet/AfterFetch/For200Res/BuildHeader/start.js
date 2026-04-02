import { startFunc as sortData } from "./sortData.js";
import { startFunc as updateHeaderUI } from "./updateHeaderUI.js";
import { getFinalData, setSort } from "../../../../../tableStore.js";

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
            updateHeaderUI(tr, th, key); // restore arrows
        });

        tr.appendChild(th);
    });

    thead.appendChild(tr);
};


const startFunc1 = ({ thead, keys, renderBody }) => {
    let sortState = {};

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
            const data = getFinalData();              // ✅ always fresh
            const asc = sortData(key, data, sortState);
            updateHeaderUI(tr, th, key, asc);
            renderBody({ keys, inData: data });       // ✅ use same data
        });

        tr.appendChild(th);
    });

    thead.appendChild(tr);
};

export { startFunc };

