"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.getList = void 0;
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const url = (_a = process.env.CRYPTO_URL) !== null && _a !== void 0 ? _a : "https://api.coingecko.com/api/v3/";
const getList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(url + "coins/list");
        const data = response.data;
        return data;
    }
    catch (err) {
        console.log("service for current list", err);
        throw err;
    }
});
exports.getList = getList;
const convert = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currency, crypto, amount } = input;
        const res = yield axios_1.default.get(url + `simple/price?ids=${crypto}&vs_currencies=${currency}`);
        const response = res.data;
        const data = response[crypto][currency];
        const result = Math.round(data * parseInt(amount));
        return result;
    }
    catch (err) {
        console.log("Error while getting currency for crypto service", err);
        throw err;
    }
});
exports.convert = convert;
