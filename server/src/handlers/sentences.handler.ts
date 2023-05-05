import { Request, Response } from 'express';
import {getDBSentences, addDBSentence, removeDBSentence} from '../controllers/sentences.controller';
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

    console.log('Insertado');
    res.status(201).json({
        insertId: result.insertId
    });
}

const removeSentence = async (req: Request, res: Response) => {
    let id: number;
    if (isNaN(id = parseInt(req.params.id))) {
        res.status(400).json({
            err: 'Id bad formatted'
        });
    } else {
        await removeDBSentence(id);
        res.status(204).send();
    }
}

export { getSentences, addSentence, removeSentence }
