import { Router } from 'express';
const sentencesRouter : Router = Router();

import { addSentence, getSentences } from '../handlers/sentences.handler';

sentencesRouter.route('/')
    .get(getSentences)
    .post(addSentence);

export { sentencesRouter };
