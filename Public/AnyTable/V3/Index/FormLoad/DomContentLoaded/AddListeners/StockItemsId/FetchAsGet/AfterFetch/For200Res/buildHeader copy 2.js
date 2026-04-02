let sortState = {};

const startFunc = ({ thead, keys, dataRef, renderBody }) => {

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
        th.textContent = key + ' ⇅';

        th.addEventListener('click', () => {

            const asc = sortState[key] = !sortState[key];

            // reset all headers
            tr.querySelectorAll('th').forEach(h => {
                if (h !== th && h !== thIndex) {
                    h.textContent = h.dataset.key + ' ⇅';
                }
            });

            // set arrow for current
            th.textContent = key + (asc ? ' ▲' : ' ▼');

            dataRef.sort((a, b) => {
                const valA = a[key] ?? '';
                const valB = b[key] ?? '';

                if (valA < valB) return asc ? -1 : 1;
                if (valA > valB) return asc ? 1 : -1;
                return 0;
            });

            renderBody({ keys, inData: dataRef });
        });

        tr.appendChild(th);
    });

    thead.appendChild(tr);
};

export { startFunc };