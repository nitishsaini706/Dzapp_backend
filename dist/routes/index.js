"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = require("../controller/crypto");
const currencyList_1 = require("../controller/currencyList");
const router = express_1.default.Router();
router.get("/list/crypto", crypto_1.cryptoList);
router.get("/list/currencies", currencyList_1.currenyList);
router.get("/currenyForCrypto", crypto_1.currenyForCrypto);
exports.default = router;
