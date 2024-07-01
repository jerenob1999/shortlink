import Router from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/user");
router.post("/user", UserController.postUser);

export default router;
