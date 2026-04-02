let StartFunc = ({ inResponseAsJson }) => {

    const tbody = document.getElementById('tableBody');
    const template = document.getElementById('rowTemplate');

    tbody.innerHTML = ''; // clear

    inResponseAsJson.forEach((item, i) => {
        const clone = template.content.cloneNode(true);
        const tds = clone.querySelectorAll('td');

        tds[0].textContent = i + 1;
        tds[1].textContent = item.SzCode;
        tds[2].textContent = item.SzName;

        tbody.appendChild(clone);
    });

};

export { StartFunc };