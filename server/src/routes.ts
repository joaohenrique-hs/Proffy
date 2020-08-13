import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import RegisterController from './controllers/RegisterController';

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const registerController = new RegisterController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/users', registerController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
