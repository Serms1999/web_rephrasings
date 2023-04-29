import express, {Express, Request, Response, Router} from 'express';
import { setupMiddlewares } from './middlewares/middlewares';
import config from './config/config';

const server: Express = express();

// Middlewares
setupMiddlewares(server);

// Routes
const routes: Router = require('./routes/sentences.router').router;
server.use('/sentences', routes);

server.listen(config.server.port, () : void => {
    console.log(`[server]: Server is running at http://${config.server.hostname}:${config.server.port}`);
});

exports.app = server;
