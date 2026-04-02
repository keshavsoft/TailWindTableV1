// table.js

export function initTable() {
    const tbody = document.getElementById('tableBody');
    let currentIndex = -1;

    const selectRow = (rows) => {
        rows.forEach(r => r.classList.remove('!bg-blue-400', 'text-white'));
        const row = rows[currentIndex];
        if (!row) return;
        row.classList.add('!bg-blue-400', 'text-white');
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    document.addEventListener('keydown', (e) => {
        const rows = document.querySelectorAll('#tableBody tr');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = Math.min(currentIndex + 1, rows.length - 1);
            selectRow(rows);
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = Math.max(currentIndex - 1, 0);
            selectRow(rows);
        }
    });

    tbody.addEventListener('click', (e) => {
        const rows = document.querySelectorAll('#tableBody tr');
        const row = e.target.closest('tr');
        if (!row) return;

        currentIndex = Array.from(rows).indexOf(row);
        selectRow(rows);
    });
}