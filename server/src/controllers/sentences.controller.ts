import {Connect, Query} from '../config/db';
import mysql from 'mysql2/promise';
import {ISentence} from '../interfaces/sentences.interface';
import {RowDataPacket} from 'mysql2';

const getDBSentences = async (num?: number) => {
    let query = 'SELECT * FROM question';

    if (typeof num !== 'undefined') {
        query += ' ORDER BY RAND()';
        query += ` LIMIT ${num}`;
    }

    const connection = await Connect();
    const result = await Query(connection, query);
    return <ISentence[]>result[0];
}

const addDBSentence = async (newSentence: ISentence) => {
    let query =
        'INSERT INTO question (sentence, keyword, sentence_start, sentence_end, answer)' +
        ' VALUES (?, ?, ?, ?, ?)';

    const connection = await Connect();
    const result = await Query(connection, query, [
        newSentence.sentence,
        newSentence.keyword,
        newSentence.sentence_start,
        newSentence.sentence_end,
        newSentence.answer
    ]);
    return <RowDataPacket>result[0];
}

const removeDBAllSentences = async () => {
    const query = 'DELETE FROM question';

    const connection = await Connect();
    await Query(connection, query);
}

const removeDBSentence = async (id: number)=> {
    const query = 'DELETE FROM question WHERE id=?';

    const connection = await Connect();
    await Query(connection, query, [id]);
}

export { getDBSentences, addDBSentence, removeDBAllSentences, removeDBSentence };
