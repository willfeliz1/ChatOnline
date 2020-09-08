import { Router } from 'express';
// import chatRouter from './chat.routes';
// import sessionsRouter from '../modules/users/routes/sessions.routes';
import usersRouter from '../modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/chat', chatRouter);

export default routes;
