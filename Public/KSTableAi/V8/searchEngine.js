export const applySearch = ({ data, searchConfig }) => {

    const match = (val, search) =>
        val !== undefined &&
        val !== null &&
        String(val).includes(search);

    if (!searchConfig) return data;

    switch (searchConfig.type) {

        case "global":
            return data.filter(row =>
                Object.values(row).some(val =>
                    match(val, searchConfig.value)
                )
            );

        case "column":
            return data.filter(row =>
                match(row[searchConfig.key], searchConfig.value)
            );

        case "multi":
            return data.filter(row =>
                searchConfig.filters.every(f =>
                    match(row[f.key], f.value)
                )
            );

        default:
            return data;
    }
};