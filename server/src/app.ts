import express, {Express, Request, Response, Router} from "express";
require('dotenv').config({path: 'src/config/.env'});
const env : NodeJS.ProcessEnv = process.env;

const app: Express = express();
const port : string | undefined = env.PORT;

// Routes
const sentencesRoutes: Router = require('./sentences/sentences.router').router;

app.get('/', (req: Request, res: Response) : void => {
    res.send('Web Rephrasing API');
});

app.use('/sentences', sentencesRoutes);

app.listen(port, () : void => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

exports.app = app;
