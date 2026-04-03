const startFunc = ({ thead, keys, dataRef, renderBody }) => {
    let sortState = {};

    const sortData = (key) => {
        const asc = sortState[key] = !sortState[key];

        dataRef.sort((a, b) => {
            const valA = (a[key] ?? '').toString().toLowerCase();
            const valB = (b[key] ?? '').toString().toLowerCase();

            return asc
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        });

        return asc;
    };

    const updateHeaderUI = (tr, th, key, asc) => {
        tr.querySelectorAll('th').forEach(h => {
            if (h.dataset?.key) {
                h.innerHTML = `${h.dataset.key} <span class="text-gray-400">↑↓</span>`;
            }
        });

        th.innerHTML = `${key} ${asc ? '▲' : '▼'}`;
    };

    const createHeader = () => {
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
                const asc = sortData(key);
                updateHeaderUI(tr, th, key, asc);
                renderBody({ keys, inData: dataRef });
            });

            tr.appendChild(th);
        });

        thead.appendChild(tr);
    };

    createHeader();
};

export { startFunc };