import { Router } from "express";
import { twittController } from "../controllers/twitts.controller.js";

const twittRouter = Router();

twittRouter.get("/twitts", twittController.getTwitt); // все твиты
twittRouter.get("/twitts/user/:id", twittController.getTwittByUser); // твиты которые написал какой то юзер
twittRouter.post("/twitts", twittController.addTwitt); // добавить твитт ( с айди юзера)
twittRouter.patch("/twitts/:id", twittController.updateTwitt); // изменить твит ( к примеру лайк поставить)
twittRouter.delete("/twitts/:id", twittController.deletedTwitt);

export { twittRouter };
