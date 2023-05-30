import mysql from 'mysql2/promise';
import config from "../config/config";
import {FieldPacket, RowDataPacket} from "mysql2";
import {Connection} from "mysql2/promise";

const params = {
    user: config.db.user,
    password: config.db.pass,
    host: config.db.host,
    database: config.db.database
};

const Connect = async (): Promise<Connection> => {
    return mysql.createConnection(params);
}

const Query = async (connection: Connection, query: string, values?: (string | number)[]): Promise<[RowDataPacket[], FieldPacket[]]> => {
    return connection.query(query, values);
}

const Release = async (connection: Connection) => {
    return connection.end();
}

export { Connect, Query, Release };
