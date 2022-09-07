import { Router } from "express";
import { userController } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get("/users", userController.getUser);
userRouter.post("/users", userController.addUser);
userRouter.delete("/users/:id", userController.deletedUser);
userRouter.patch("/users/:id", userController.updateUser);

export { userRouter };
