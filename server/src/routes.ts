import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const userController = new UserController();
const sessionController = new SessionController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/users', userController.create);

routes.post('/session', sessionController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
