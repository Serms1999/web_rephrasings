import express, {Express, Request, Response, Router} from 'express';
import dotenv from 'dotenv';
dotenv.config({path: 'src/config/.env'});
const env : NodeJS.ProcessEnv = process.env;

const server: Express = express();
const port : string | undefined = env.PORT;

// Routes
const routes: Router = require('./routes/sentences.router').router;
server.use('/', routes);

server.listen(port, () : void => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

exports.app = server;
