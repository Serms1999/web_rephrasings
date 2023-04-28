import {Request, Response} from "express";
import { Router } from "express";
const router : Router = Router();

router.route('/')
    .get((req : Request, res : Response): void => {
        res.status(200).send('Sentence page');
    })

exports.router = router;