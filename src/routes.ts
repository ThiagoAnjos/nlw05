import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

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

routes.post("/settings", settingController.create);

export { routes }