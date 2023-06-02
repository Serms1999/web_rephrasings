import { Router } from 'express';
const sentencesRouter : Router = Router();

import {
    addSentence,
    editSentence, eraseDatabase,
    getSentenceCount,
    getSentences,
    importSentences,
    removeSentence
} from '../handlers/sentences.handler';

sentencesRouter.route('/')
    .get(getSentences)
    .post(addSentence);

sentencesRouter.route('/count')
    .get(getSentenceCount)

sentencesRouter.route('/edit/:id')
    .put(editSentence);

sentencesRouter.route('/import')
    .put(importSentences);

sentencesRouter.route('/delete/:id')
    .delete(removeSentence);

sentencesRouter.route('/erase')
    .delete(eraseDatabase)

export { sentencesRouter };
