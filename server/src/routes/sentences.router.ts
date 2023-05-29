import { Router } from 'express';
const sentencesRouter : Router = Router();

import {addSentence, editSentence, getSentenceCount, getSentences, removeSentence} from '../handlers/sentences.handler';

sentencesRouter.route('/')
    .get(getSentences)
    .post(addSentence);

sentencesRouter.route('/count')
    .get(getSentenceCount)

sentencesRouter.route('/edit/:id')
    .put(editSentence);

sentencesRouter.route('/delete/:id')
    .delete(removeSentence);

export { sentencesRouter };
