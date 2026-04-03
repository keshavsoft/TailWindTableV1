import fs from "fs";
const targetPath = "Data/StockItems.json";

const fromEnvPath = () => {
    try {
        const LocalFileData = fs.readFileSync(targetPath);
        const LocalFileDataAsJson = JSON.parse(LocalFileData);

        return LocalFileDataAsJson;
    } finally {
        globalThis.__IMPORT_RUNNING__ = false;
    }
};

export { fromEnvPath };