import {Request, Response} from "express";
import {DatabaseError} from "../interfaces/errors";
import {getDBExamSentences} from "../controllers/exam.controller";

const getExamSentences = async (req: Request, res: Response) => {
    let numQuestions: number;
    if (isNaN(numQuestions = parseInt(req.params.numQuestions))) {
        res.status(400).json({
            err: 'Number of questions bad formatted'
        });
        return;
    }

    try {
        const data = await getDBExamSentences(numQuestions);
        res.status(200).json(
            data
        );
    } catch (e) {
        if (e instanceof DatabaseError) {
            res.status(500).json({
                err: 'Connection error'
            });
        }
    }
}

export { getExamSentences }
