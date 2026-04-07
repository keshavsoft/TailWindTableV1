const appendFooterSaveCell = (options = {}) => {
debugger
    if (!options?.showActions) return;

    const td = document.createElement("td");
    td.className = "px-4 py-2 border";

    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.className = "px-3 py-1 bg-green-500 text-white rounded";

    btn.onclick = () => options.onSave?.();

    td.appendChild(btn);
debugger
    return td;
    // tr.appendChild(td);
};

export { appendFooterSaveCell };