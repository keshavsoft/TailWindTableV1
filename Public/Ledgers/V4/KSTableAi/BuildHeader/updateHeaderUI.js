import { getSortState } from "../tableStore.js";

const startFunc = (tr, th, key) => {
    const { key: activeKey, asc } = getSortState();

    tr.querySelectorAll("th[data-key]").forEach(h => {
        const icon = h.querySelector("[data-sort-icon]");
        if (!icon) return;

        const path = icon.querySelector("path");

        // ✅ Reset icon
        if (path) {
            path.setAttribute(
                "d",
                "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            );
        }

        h.classList.remove("text-gray-900");
        h.classList.add("text-gray-700");
    });

    if (activeKey === key) {
        const icon = th.querySelector("[data-sort-icon]");
        const path = icon?.querySelector("path");

        if (path) {
            path.setAttribute(
                "d",
                asc
                    ? "M5 15l7-7 7 7"
                    : "M19 9l-7 7-7-7"
            );
        }

        th.classList.remove("text-gray-700");
        th.classList.add("text-gray-900");
    }
};

export { startFunc };