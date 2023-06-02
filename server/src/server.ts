import express, { Express, Router } from 'express';
import { setupMiddlewares } from './middlewares/middlewares';
import config from './config/config';
import { sentencesRouter } from './routes/sentences.router';
import { examRouter } from "./routes/exam.router";

const server: Express = express();

// Middlewares
setupMiddlewares(server);

// Routes
server.use('/sentences', sentencesRouter);
server.use('/exam', examRouter);

server.listen(config.server.port, (): void => {
    const SERVER_URL = `${config.server.https ? "https" : "http"}://` +
        `${config.server.hostname}:${config.server.port}`;
    console.log(`[server]: Server is running at ${SERVER_URL}`);
});

export { server };
