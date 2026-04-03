// NEW: createHeaderRow.js

export const createHeaderRow = (keys) => {
    const tr = document.createElement("tr");

    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";
    tr.appendChild(thIndex);

    keys.forEach(key => {
        const th = document.createElement("th");
        th.className = "px-4 py-2 border cursor-pointer";
        th.dataset.key = key;
        th.innerHTML = `${key} <span class="text-gray-400">↕</span>`;
        tr.appendChild(th);
    });

    return tr;
};