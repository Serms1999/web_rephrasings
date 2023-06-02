import {Connect, Query, Release} from '../database/db';
import {ISentence} from '../interfaces/sentences.interface';
import {RowDataPacket} from 'mysql2';
import {DatabaseError} from "../interfaces/errors";
import config from "../config/config";

const tableName = config.db.table;

const getDBSentences = async () => {
    const query = `SELECT * FROM ${tableName}`;

    try {
        const connection = await Connect();
        const result = await Query(connection, query);
        await Release(connection);
        return <ISentence[]>result[0];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const getDBSentencesCount = async () => {
    const query = `SELECT COUNT(id) FROM ${tableName}`;

    try {
        const connection = await Connect();
        const result = await Query(connection, query);
        await Release(connection);
        return <RowDataPacket>result[0][0]['COUNT(id)'];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const addDBSentence = async (newSentence: ISentence) => {
    const query =
        `INSERT INTO ${tableName} (sentence, keyword, sentence_start, sentence_end, answer)` +
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
        await Release(connection);
        return <RowDataPacket>result[0];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const editDBSentence = async (id: number, newSentence: ISentence) => {
    const query = `UPDATE ${tableName}` +
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
        await Release(connection);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const removeDBAllSentences = async () => {
    const query = `DELETE FROM ${tableName}`;

    try {
        const connection = await Connect();
        await Query(connection, query);
        await Release(connection);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const removeDBSentence = async (id: number)=> {
    const query = `DELETE FROM ${tableName} WHERE id=?`;

    try {
        const connection = await Connect();
        await Query(connection, query, [id]);
        await Release(connection);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

const importDBSentences = async (importedSentences: ISentence[]): Promise<number[]> => {
    let query =
        `INSERT INTO ${tableName} (sentence, keyword, sentence_start, sentence_end, answer)` +
        ' VALUES (?, ?, ?, ?, ?)';
    query += ',(?, ?, ?, ?, ?)'.repeat(importedSentences.length - 1);
    const values = importedSentences.map(sentence => {
        return [sentence.sentence, sentence.keyword, sentence.sentence_start, sentence.sentence_end, sentence.answer];
    }).flat();

    try {
        const connection = await Connect();
        const result = await Query(connection, query, values);
        await Release(connection);
        // @ts-ignore
        const firstIndex: number = result[0].insertId;
        return Array.from({length: importedSentences.length}, (_, i) => i + firstIndex);
    } catch (e) {
        throw new DatabaseError(e);
    }
}

export { getDBSentences, getDBSentencesCount, addDBSentence, editDBSentence,
    removeDBAllSentences, removeDBSentence, importDBSentences };
