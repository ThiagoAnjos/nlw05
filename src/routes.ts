import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UsersController";

const routes = Router();

/**
 * Tipos de parâmetros
 * Route Params => Parâmetros de rotas;
 *  http://localhost:3333/setings/1
 * 
 * Query Params => Filtros e Buscas;
 *  http://localhost:3333/setings/1?search=algumacoisa
 * 
 * Body Params => {
 *  name: "A"
 * }
*/

const settingController = new SettingsController();
const userController = new UserController();
const messageController = new MessagesController();

routes.post("/settings", settingController.create);
routes.get("/settings/:username", settingController.findByUsername);
routes.put("/settings/:username", settingController.update);

routes.post("/users", userController.create)

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);


export { routes }