import { Router } from 'express';
const sentencesRouter : Router = Router();

import { getAllSentences } from "../handlers/sentences.http";
import {getSentences} from "../controllers/sentences.controller";

sentencesRouter.route('/get/sentences')
    .get(getSentences)

exports.router = sentencesRouter;
