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
    return mysql.createConnection(params);
}

const Query = async (connection: mysql.Connection, query: string, values?: (string | number)[]): Promise<[RowDataPacket[], FieldPacket[]]> => {
    return connection.query(query, values);
}

export { Connect, Query };
