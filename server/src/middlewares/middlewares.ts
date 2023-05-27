import bodyParser from "body-parser";
import { Express } from "express";
import cors from 'cors';

const setupMiddlewares = (server: Express): void => {
    server.use(bodyParser.json());
    server.use(cors());
}

export { setupMiddlewares };
