import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const userController = new UserController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/users', userController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
