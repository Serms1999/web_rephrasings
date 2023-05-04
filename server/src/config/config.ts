import dotenv from 'dotenv';
import path from "path";
import {getSentences} from "../handlers/sentences.handler";

dotenv.config({path: path.resolve(__dirname, '../../config/.env')});

const DB_HOST: string = process.env.DB_HOST || 'localhost';
const DB_DATABASE: string = process.env.DB_DATABASE || '';
const DB_USER: string = process.env.DB_USER || 'root';
const DB_PASS: string = process.env.DB_PASS || '';

const DB = {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    pass: DB_PASS
};

const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    db: DB,
    server: SERVER
};

export default config;
