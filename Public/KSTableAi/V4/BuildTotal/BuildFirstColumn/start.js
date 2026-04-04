const startFunc = ({ inTableName, inTableContainer }) => {
    const find = inTableContainer.querySelector(".tableNameClass");

    find.innerHTML = inTableName;
};

export { startFunc };