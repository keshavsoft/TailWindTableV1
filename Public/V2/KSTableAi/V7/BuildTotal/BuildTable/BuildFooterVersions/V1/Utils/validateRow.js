// Utils/validateRow.js

const REQUIRED_FIELDS = ["LedgerName", "LedgerParentName", "LedgerType"];

const validateRow = (payload) => {
    return REQUIRED_FIELDS
        .filter(key => !payload[key] || String(payload[key]).trim() === "")
        .map(key => ({
            field: key,
            message: `${key} is required`
        }));
};

export { validateRow };