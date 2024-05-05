import { Router, Request, Response } from "express";
const router: Router = Router();

import * as controller from "../controllers/user.controller";

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/detail/:id", controller.detail);

export const userRouters: Router = router;