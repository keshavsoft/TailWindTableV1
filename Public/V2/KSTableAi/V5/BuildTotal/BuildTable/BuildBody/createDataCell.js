const createDataCell = (value) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border";
    td.textContent = (value ?? "").toString();
    return td;
};

export { createDataCell };