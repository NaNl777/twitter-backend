import { Router } from "express";
import { commentController } from "../controllers/comments.controller.js";

const commentRouter = Router();

commentRouter.get("/comments", commentController.getComment);
commentRouter.get("/comments/user/:id", commentController.getCommentsByUser);
commentRouter.get("/comments/twitts/:id", commentController.getCommentsByTwitt);
commentRouter.delete("/comments/:id", commentController.deletedComment);
commentRouter.patch("/comments/:id", commentController.updateComment);
commentRouter.post("/comments", commentController.addComment);

export { commentRouter };
