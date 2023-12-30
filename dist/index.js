"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
require("dotenv/config");
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Use middleware to apply routes
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
server.use(index_1.default);
server.get("/", (req, res) => {
    res.status(200).json("Server working fine");
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
