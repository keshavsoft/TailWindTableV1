// insertCells.js (clean + configurable)

const startFunc = (keys, tr, options = {}) => {
    keys.forEach(key => {
        const th = document.createElement("th");

        applyHeaderCellStyle(th, options);

        th.dataset.key = key;

        th.textContent = key;
        th.appendChild(createSortIcon(options));

        tr.appendChild(th);
    });
};

const applyHeaderCellStyle = (th, options, key) => {
    const base1 = "px-4 py-2 font-semibold text-gray-700 bg-gray-100 border-r last:border-r-0 shadow-inner";
    const base2 = "px-5 py-3 font-semibold text-gray-700 bg-gray-100 border-r last:border-r-0 shadow-inner";
    const base3 = "px-6 py-3 text-sm font-semibold text-gray-700 border-r last:border-r-0 flex items-center gap-2";
    const base = "px-6 py-3 text-sm font-semibold text-gray-700 border-r last:border-r-0";

    const wrap = document.createElement("div");
    wrap.className = "flex items-center gap-2";
    wrap.append(key, createSortIcon(options));
    th.appendChild(wrap);

    const hover = options.headerHoverClass || "";
    th.className = `${base} ${hover}`;
};

const createSortIcon = (options) => {
    const span = document.createElement("span");
    span.className = options.sortIconClass || "text-gray-400";
    span.textContent = options.sortIcon || "↕";
    return span;
};

export { startFunc };