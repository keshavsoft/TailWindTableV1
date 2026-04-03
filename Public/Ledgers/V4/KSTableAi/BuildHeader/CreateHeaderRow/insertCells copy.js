// insertCells.js (clean + configurable)


const startFunc = (keys, tr, options = {}) => {
    keys.forEach(key => {
        tr.appendChild(createHeaderCell(key));
    });
};

const createHeaderCell = (key) => {
    const th = document.createElement("th");

    // TH styles
    th.className =
        "px-6 py-3 text-left border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer";

    th.dataset.key = key;

    // Wrapper div (instead of <p>)
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-1 text-base font-bold text-gray-800";

    // Text
    const text = document.createElement("span");
    text.textContent = key;

    // SVG icon
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("class", "w-4 h-4 text-gray-400");
    svg.setAttribute("data-sort-icon", "true"); // 🔥 ADD THIS

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute(
        "d",
        "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    );

    svg.appendChild(path);

    // Build structure
    wrapper.appendChild(text);
    wrapper.appendChild(svg);
    th.appendChild(wrapper);

    return th;
};


export { startFunc };