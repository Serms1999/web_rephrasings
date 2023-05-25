import { Router } from 'express';
import { getExamSentences } from "../handlers/exam.handler";
const examRouter : Router = Router();

examRouter.route('/:numQuestions')
    .get(getExamSentences);

export { examRouter };
