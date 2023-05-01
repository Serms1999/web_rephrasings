import { Router } from 'express';
const sentencesRouter : Router = Router();

import { getSentences } from "../handlers/sentences.handler";

sentencesRouter.route('/get/sentences')
    .get(getSentences)

exports.router = sentencesRouter;
