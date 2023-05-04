import { Request, Response } from 'express';
import { getDBSentences, addDBSentence } from '../controllers/sentences.controller';
import { checkSentenceOnlyValidChars } from '../tools/sentences.tool';
import { ISentence } from '../interfaces/sentences.interface';

const getSentences = async (req: Request, res: Response) => {
    const data = await getDBSentences();

    res.status(200).json(
        data
    );
}

const addSentence = async (req: Request, res: Response) => {
    const newSentence: ISentence = req.body.sentence;

    if (!checkSentenceOnlyValidChars(newSentence)) {
        res.status(400).json({
            err: 'Sentence bad formatted'
        });
        return;
    }

    const result = await addDBSentence(newSentence);

    res.status(200).json(
        result.insertId
    );
}

export { getSentences, addSentence }
