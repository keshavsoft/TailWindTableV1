import express from 'express';
import http from 'http';
import { router as routerFromLedgers } from "./Ledgers/routes.js";
import { router as routerFromStockItems } from "./StockItems/routes.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));
app.use('/Ledgers', routerFromLedgers);
app.use('/StockItems', routerFromStockItems);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});