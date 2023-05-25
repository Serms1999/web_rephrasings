import {Connect, Query} from "../config/db";
import {ISentence} from "../interfaces/sentences.interface";
import {DatabaseError} from "../interfaces/errors";

const getDBExamSentences = async (num: number) => {
    let query = 'SELECT * FROM question ORDER BY RAND() LIMIT ?';

    try {
        const connection = await Connect();
        const result = await Query(connection, query, [num]);
        return <ISentence[]>result[0];
    } catch (e) {
        throw new DatabaseError(e);
    }
}

export { getDBExamSentences }
