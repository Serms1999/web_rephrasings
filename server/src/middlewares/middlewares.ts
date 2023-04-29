import bodyParser from "body-parser";
import { Express } from "express";

const setupMiddlewares = (server: Express) : void => {
    server.use(bodyParser.json());
}

export { setupMiddlewares };
