import express from "express";
import { createFinance} from "../controllers/finance.js";

const router = express.Router();

router.post("/create", createFinance);

export default router;