import { Request, Response } from 'express';
import {getSentences} from "../controllers/sentences.controller";

const getAllSentences = (req : Request, res : Response) : void => {
    const sentences = getSentences(req, res)
};

export { getAllSentences }
