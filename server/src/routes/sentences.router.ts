import { Request, Response } from 'express';
import { Router } from 'express';
const sentencesRouter : Router = Router();

sentencesRouter.route('/')
    .get((req : Request, res : Response): void => {
        res.status(200).send('Sentence page');
    })

exports.router = sentencesRouter;
