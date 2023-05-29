import {Connect, Query} from '../config/db';
import mysql from 'mysql2/promise';
import {ISentence} from '../interfaces/sentences.interface';
import {RowDataPacket} from 'mysql2';
import {DatabaseError} from "../interfaces/errors";

const getDBSentences = async () => {
    const query = 'SELECT * FROM question';

    try {
        const connection = await Connect();
        const result = await Query(connection, query);
        return <ISentence[]>result[0];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const getDBSentencesCount = async () => {
    const query = 'SELECT COUNT(id) FROM question';

    try {
        const connection = await Connect();
        const result = await Query(connection, query);
        return <RowDataPacket>result[0][0]['COUNT(id)'];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const addDBSentence = async (newSentence: ISentence) => {
    const query =
        'INSERT INTO question (sentence, keyword, sentence_start, sentence_end, answer)' +
        ' VALUES (?, ?, ?, ?, ?)';

    try {
        const connection = await Connect();
        const result = await Query(connection, query, [
            newSentence.sentence,
            newSentence.keyword,
            newSentence.sentence_start,
            newSentence.sentence_end,
            newSentence.answer
        ]);
        return <RowDataPacket>result[0];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const editDBSentence = async (id: number, newSentence: ISentence) => {
    const query = 'UPDATE question' +
        ' SET sentence=?, keyword=?, sentence_start=?, sentence_end=?, answer=?' +
        ' WHERE id=?';

    try {
        const connection = await Connect();
        await Query(connection, query, [
            newSentence.sentence,
            newSentence.keyword,
            newSentence.sentence_start,
            newSentence.sentence_end,
            newSentence.answer,
            id
        ]);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const removeDBAllSentences = async () => {
    const query = 'DELETE FROM question';

    try {
        const connection = await Connect();
        await Query(connection, query);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const removeDBSentence = async (id: number)=> {
    const query = 'DELETE FROM question WHERE id=?';

    try {
        const connection = await Connect();
        await Query(connection, query, [id]);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

export { getDBSentences, getDBSentencesCount, addDBSentence, editDBSentence, removeDBAllSentences, removeDBSentence };
