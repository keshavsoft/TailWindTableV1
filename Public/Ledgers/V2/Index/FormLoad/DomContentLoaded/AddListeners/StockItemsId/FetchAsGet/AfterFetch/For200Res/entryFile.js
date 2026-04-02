let StartFunc = ({ inResponseAsJson }) => {
    const tbody = document.getElementById('tableBody');
    const thead = document.getElementById('tableHead');

    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    const keys = Object.keys(inResponseAsJson[0]);

    BuildHeader({ thead, keys });

    buildBody({ inResponseAsJson, keys });
};

const buildBody = ({ inResponseAsJson, keys }) => {
    const tbody = document.getElementById('tableBody');

    tbody.innerHTML = '';

    inResponseAsJson.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.className = 'border-t hover:bg-blue-100 odd:bg-gray-100';

        const tdIndex = document.createElement('td');
        tdIndex.className = 'px-4 py-2 border text-right';
        tdIndex.textContent = i + 1;
        tr.appendChild(tdIndex);

        keys.forEach(k => {
            const td = document.createElement('td');
            td.className = 'px-4 py-2 border';
            td.textContent = item[k] ?? '';
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
};

const buildBody1 = ({ inResponseAsJson, keys }) => {
    const tbody = document.getElementById('tableBody');

    tbody.innerHTML = ''; // clear

    inResponseAsJson.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.className = 'border-t hover:bg-blue-100 odd:bg-gray-100';

        tr.innerHTML = `<td class="px-4 py-2 border text-right">${i + 1}</td>` +
            keys.map(k => `<td class="px-4 py-2 border">${item[k] ?? ''}</td>`).join('');

        tbody.appendChild(tr);
    });
};

let BuildHeader = ({ thead, keys }) => {
    thead.innerHTML = '';

    const tr = document.createElement('tr');

    const thIndex = document.createElement('th');
    thIndex.className = 'px-4 py-2 border';
    thIndex.textContent = '#';
    tr.appendChild(thIndex);

    keys.forEach(key => {
        const th = document.createElement('th');
        th.className = 'px-4 py-2 border';
        th.textContent = key;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
};

export { StartFunc };