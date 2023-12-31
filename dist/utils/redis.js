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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRedis = exports.client = void 0;
const redis_1 = require("redis");
exports.client = ""; // Declare client outside the function
const useRedis = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!exports.client) {
            exports.client = yield (0, redis_1.createClient)().connect();
        }
        return exports.client;
    }
    catch (err) {
        console.log("Error while initializing Redis", err);
        throw err;
    }
});
exports.useRedis = useRedis;
