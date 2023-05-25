import { Router } from 'express';
const sentencesRouter : Router = Router();

import {addSentence, editSentence, getSentences, removeSentence} from '../handlers/sentences.handler';

sentencesRouter.route('/')
    .get(getSentences)
    .post(addSentence);

sentencesRouter.route('/edit/:id')
    .put(editSentence);

sentencesRouter.route('/delete/:id')
    .delete(removeSentence);

export { sentencesRouter };
