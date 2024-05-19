import { Router } from "express";
import * as ic from "./items.controler.js";

const router = Router();

router.get("/", ic.getData)
router.post("/", ic.addData)
router.put("/", ic.updateData)
router.delete("/", ic.deleteData)

export default router