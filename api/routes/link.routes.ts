import Router from "express";
import { LinkController } from "../controllers/link.controller";

const router = Router();

router.get("/list/link");
router.post("/link", LinkController.createLink);

export default router;
