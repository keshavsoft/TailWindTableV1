const createForm = ({ columns, onSubmit }) => {
    const form = document.createElement('div');
    form.className = 'mb-4 p-4 border rounded';

    const inputs = {};

    columns.forEach(col => {
        const row = document.createElement('div');
        row.className = 'flex items-center gap-4 mb-2';

        const label = document.createElement('label');
        label.textContent = col;
        label.className = 'w-40';

        const input = document.createElement('input');
        input.className = 'border px-2 py-1 flex-1';

        inputs[col] = input;

        row.appendChild(label);
        row.appendChild(input);
        form.appendChild(row);
    });

    const button = document.createElement('button');
    button.textContent = 'Save';
    button.className = 'mt-3 px-4 py-2 bg-blue-500 text-white';

    button.addEventListener('click', () => {
        const newItem = {};

        columns.forEach(col => {
            newItem[col] = inputs[col].value;
        });

        onSubmit(newItem);
    });

    form.appendChild(button);

    return form;
};

export { createForm };