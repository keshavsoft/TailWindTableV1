let StartFunc = ({ inResponseAsJson }) => {
    if (!inResponseAsJson || inResponseAsJson.length === 0) return;

    window.kSTableAi.init({ data: inResponseAsJson });
};

export { StartFunc };