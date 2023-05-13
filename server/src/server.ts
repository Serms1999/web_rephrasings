import express, { Express, Router } from 'express';
import { setupMiddlewares } from './middlewares/middlewares';
import config from './config/config';
import { sentencesRouter } from './routes/sentences.router';

const server: Express = express();

// Middlewares
setupMiddlewares(server);

// Routes
server.use('/sentences', sentencesRouter);

server.listen(config.server.port, (): void => {
    console.log(`[server]: Server is running at http://${config.server.hostname}:${config.server.port}`);
});

export { server };