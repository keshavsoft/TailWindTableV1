import { getSearch } from "./tableStore.js";

const startFunc = ({ keys, inData }) => {
    const tbody = document.getElementById('tableBody');
    const dataToShow = inData;

    tbody.innerHTML = '';

    dataToShow.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.className = 'border-t hover:bg-blue-100 odd:bg-gray-100';

        const tdIndex = document.createElement('td');
        tdIndex.className = 'px-4 py-2 border text-right';
        tdIndex.textContent = i + 1;
        tr.appendChild(tdIndex);

        keys.forEach(k => {
            const td = document.createElement('td');
            td.className = 'px-4 py-2 border';

            const value = (item[k] ?? '').toString();
            const txt = getSearch().toLowerCase();

            if (txt) {
                const lower = value.toLowerCase();
                const index = lower.indexOf(txt);

                if (index !== -1) {
                    const before = value.slice(0, index);
                    const match = value.slice(index, index + txt.length);
                    const after = value.slice(index + txt.length);

                    td.innerHTML = `${before}<span class="bg-yellow-300 font-semibold">${match}</span>${after}`;
                } else {
                    td.textContent = value;
                }
            } else {
                td.textContent = value;
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
};

export { startFunc };