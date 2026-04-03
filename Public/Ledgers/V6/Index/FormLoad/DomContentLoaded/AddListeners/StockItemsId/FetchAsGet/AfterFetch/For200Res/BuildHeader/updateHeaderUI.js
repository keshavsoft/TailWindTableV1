import { getSortState } from '/Common/TableEngine/tableStore.js';

const startFunc = (tr, th, key) => {
    const { key: activeKey, asc } = getSortState();

    tr.querySelectorAll('th').forEach(h => {
        if (h.dataset?.key) {
            h.innerHTML = `${h.dataset.key} <span class="text-gray-400">↕</span>`;
        }
    });

    if (activeKey === key) {
        th.innerHTML = `${key} ${asc ? '▲' : '▼'}`;
    }
};

export { startFunc };