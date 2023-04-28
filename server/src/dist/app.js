"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config({ path: 'src/config/.env' });
const env = process.env;
const app = (0, express_1.default)();
const port = env.PORT;
// Routes
const sentencesRoutes = require('./sentences/sentences.router').router;
app.get('/', (req, res) => {
    res.send('Web Rephrasing API');
});
app.use('/sentences', sentencesRoutes);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
exports.app = app;
