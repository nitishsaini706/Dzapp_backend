"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenyForCrypto = exports.cryptoList = void 0;
const converterObject_1 = require("../paramsValidator/converterObject");
const crypto_1 = require("../service/crypto");
const response = __importStar(require("../utils/responseHandler"));
const cryptoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield (0, crypto_1.getList)();
        return response.handleSuccess(res, list, "Data fetched successfully");
    }
    catch (err) {
        console.log("Error in getting crpyto list currency", err);
        return response.handleError(res, err);
    }
});
exports.cryptoList = cryptoList;
const currenyForCrypto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = (0, converterObject_1.validateObject)(req.query);
        if (value) {
            const data = yield (0, crypto_1.convert)(value);
            return response.handleSuccess(res, data, "Data fetched successfully");
        }
        else if (error) {
            return response.handleError(res, error);
        }
    }
    catch (err) {
        console.log("Error in getting currency for crpyto", err);
        return response.handleError(res, err);
    }
});
exports.currenyForCrypto = currenyForCrypto;