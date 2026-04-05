// import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";
const renderDropdown = (inputEl, items = []) => {
    removeDropdown(inputEl);

    const wrap = document.createElement("div");
    wrap.className = "absolute bg-white border w-full max-h-40 overflow-auto z-50";

    items.forEach(val => {
        const item = document.createElement("div");
        item.className = "px-2 py-1 cursor-pointer hover:bg-gray-200";
        item.textContent = val;

        item.onclick = () => {
            inputEl.value = val;
            removeDropdown(inputEl);
        };

        wrap.appendChild(item);
    });

    inputEl.parentElement.style.position = "relative";
    wrap.style.top = inputEl.offsetHeight + "px";
    inputEl.parentElement.appendChild(wrap);
};

const removeDropdown = (inputEl) => {
    const old = inputEl.parentElement.querySelector(".absolute");
    if (old) old.remove();
};

const hookAllListeners = ({ inContainerEl, inDataStore, inDom }) => {
    const elements = inContainerEl.querySelectorAll('.verticalForm');

    elements.forEach((el) => {
        el.addEventListener("keydown", (event) => {
            const typedValue = event.target.value;
            console.log('New input value:', event.target.value);
            const key = event.target.name;
            const list = inDataStore.getData().map(r => r[key]);
            // const filtered = list.filter(v => v?.toLowerCase().includes(typedValue.toLowerCase()));
            // console.log("filtered : ", key, inDataStore.getData(), list, filtered);

            // const key = el.name;
            // const list = [...new Set(inDataStore.getData().map(r => r[key]).filter(Boolean))];
            document.getElementById(key + "List").innerHTML = list.map(v => `<option value="${v}">`).join("");

            // renderDropdown(el, filtered);
        });
    });
};

export { hookAllListeners };