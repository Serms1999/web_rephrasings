import mysql from 'mysql2/promise';
import config from "./config";
import {FieldPacket, RowDataPacket} from "mysql2";

const params = {
    user: config.db.user,
    password: config.db.pass,
    host: config.db.host,
    database: config.db.database
};

const Connect = async (): Promise<mysql.Connection> => {
    return new Promise<mysql.Connection>(async (resolve, reject) => {
        const connection = await mysql.createConnection(params);
        resolve(connection);
    });
}

const Query = async (connection: mysql.Connection, query: string): Promise<[RowDataPacket[], FieldPacket[]]> => {
    return new Promise(async (resolve, reject) => {
        const result: [RowDataPacket[], FieldPacket[]] = await connection.query(query);
        resolve(result);
    });
}

export { Connect, Query };
