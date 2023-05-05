import { Router } from 'express';
const sentencesRouter : Router = Router();

import { addSentence, getSentences, removeSentence } from '../handlers/sentences.handler';

sentencesRouter.route('/')
    .get(getSentences)
    .post(addSentence);

sentencesRouter.route('/delete/:id')
    .delete(removeSentence)

export { sentencesRouter };
