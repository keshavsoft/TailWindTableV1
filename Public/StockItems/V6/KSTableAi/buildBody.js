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

            td.textContent = value;

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
};

export { startFunc };