import { Request, Response } from 'express';
import {getDBSentences, addDBSentence, editDBSentence, removeDBSentence} from '../controllers/sentences.controller';
import { checkSentenceOnlyValidChars } from '../tools/sentences.tool';
import { ISentence } from '../interfaces/sentences.interface';
import {DatabaseError} from "../interfaces/errors";

const getSentences = async (req: Request, res: Response) => {
    try {
        const data = await getDBSentences();
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

const addSentence = async (req: Request, res: Response) => {
    const newSentence: ISentence = req.body.sentence;

    if (!checkSentenceOnlyValidChars(newSentence)) {
        res.status(400).json({
            err: 'Sentence bad formatted'
        });
        return;
    }

    try {
        const result = await addDBSentence(newSentence);
        res.status(201).json({
            insertId: result.insertId
        });
    } catch (e) {
        if (e instanceof DatabaseError) {
            res.status(400).json({
                err: 'Bad request'
            });
        }
    }
}

const editSentence = async (req: Request, res: Response) => {
    let id: number;
    if (isNaN(id = parseInt(req.params.id))) {
        res.status(400).json({
            err: 'Id bad formatted'
        });
        return;
    }

    const newSentence: ISentence = req.body.sentence;
    if (!checkSentenceOnlyValidChars(newSentence)) {
        res.status(400).json({
            err: 'Sentence bad formatted'
        });
        return;
    }

    try {
        await editDBSentence(id, newSentence);
        res.status(202).send();
    } catch (e) {
        if (e instanceof DatabaseError) {
            res.status(400).json({
                err: 'Bad request'
            });
        }
    }
}

const removeSentence = async (req: Request, res: Response) => {
    let id: number;
    if (isNaN(id = parseInt(req.params.id))) {
        res.status(400).json({
            err: 'Id bad formatted'
        });
        return;
    }

    try {
        await removeDBSentence(id);
        res.status(204).send();
    } catch (e) {
        if (e instanceof DatabaseError) {
            res.status(400).json({
                err: 'Bad request'
            });
        }
    }
}

export { getSentences, addSentence, editSentence, removeSentence }
