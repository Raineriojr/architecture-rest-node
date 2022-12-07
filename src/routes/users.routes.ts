import { Router } from "express";

import { UserController } from "../controllers/userController.js";

const routes = Router();

const userController = new UserController();

routes.get('/users', userController.indexAll);
routes.get('/users/:id', userController.index);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

export default routes;