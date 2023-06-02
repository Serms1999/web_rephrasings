import dotenv from 'dotenv';
import path from "path";

dotenv.config({path: path.resolve(__dirname, '../../../.env')});

const DB_HOST: string = process.env.DB_HOST ?? 'localhost';
const DB_DATABASE: string = process.env.DB_DATABASE ?? 'database';
const DB_TABLE: string = process.env.DB_TABLE ?? 'table';
const DB_USER: string = process.env.DB_USER ?? 'user';
const DB_PASS: string = process.env.DB_PASS ?? 'password';

const DB = {
    host: DB_HOST,
    database: DB_DATABASE,
    table: DB_TABLE,
    user: DB_USER,
    pass: DB_PASS
};

const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ?? 8000;
const HTTPS = process.env.HTTPS === 'true';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    https: HTTPS
};

const config = {
    db: DB,
    server: SERVER
};

export default config;
