import {Connect, Query} from "../config/db";
import mysql from "mysql2/promise";
import {Request, Response} from "express";

const getSentences = async (req: Request, res: Response) => {

    const query =
        'SELECT sentence, keyword, sentence_start, sentence_end, answer ' +
        'FROM question';

    const connection: mysql.Connection = await Connect();
    const result = await Query(connection, query);
    const data = result[0];
    console.log(data);

    res.status(200).json(
        result[0]
    );
}

export { getSentences }
