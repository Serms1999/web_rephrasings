import {Connect, Query} from "../config/db";
import mysql from "mysql2/promise";
import {Request, Response} from "express";

const getSentences = async (req: Request, res: Response) : Promise<void> => {

    const query =
        'SELECT sentence, keyword, sentence_start, sentence_end, answer ' +
        'FROM question';

    Connect()
        .then((connection: mysql.Connection) => {
            Query(connection, query)
                .then((result) => {
                    res.status(200).json({
                        result
                    });
                })
                .catch((err) => {
                    res.status(200).json({
                        message: err.message,
                        err
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((err) => {
            res.status(200).json({
                message: err.message,
                err
            });
        });
}

export { getSentences }
