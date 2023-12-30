import express from "express";
import { cryptoList,currenyForCrypto } from "../controller/crypto";
import { currenyList } from "../controller/currencyList";
const router = express.Router();

router.get("/list/crypto",cryptoList);
router.get("/list/currencies",currenyList);
router.get("/currenyForCrypto",currenyForCrypto);

export default router;