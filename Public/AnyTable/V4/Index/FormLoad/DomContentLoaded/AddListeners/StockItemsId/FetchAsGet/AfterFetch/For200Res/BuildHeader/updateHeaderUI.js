const startFunc = (tr, th, key, asc) => {
    tr.querySelectorAll('th').forEach(h => {
        if (h.dataset?.key) {
            h.innerHTML = `${h.dataset.key} <span class="text-gray-400">↑↓</span>`;
        }
    });

    th.innerHTML = `${key} ${asc ? '▲' : '▼'}`;
};

export { startFunc };