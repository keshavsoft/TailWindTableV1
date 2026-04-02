import express from 'express';
import { router as routerFromShowAll } from "./ShowAll/endpoints.js";

const router = express.Router();
router.use('/ShowAll', routerFromShowAll);

export { router };