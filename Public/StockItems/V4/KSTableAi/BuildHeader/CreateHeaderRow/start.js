import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = (keys) => {
    const tr = document.createElement("tr");

    tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr);

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};


const createHeaderCell = (key) => {
    const th = document.createElement("th");

    // TH styles
    th.className =
        "px-6 py-3 text-left border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer";

    th.dataset.key = key;

    // Wrapper div (instead of <p>)
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-1 text-sm font-medium text-gray-700";

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
