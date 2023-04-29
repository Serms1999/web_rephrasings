import mysql from 'mysql2/promise';
import config from "./config";

const params = {
    user: config.db.user,
    password: config.db.pass,
    host: config.db.host,
    database: config.db.database
};

const Connect = async () : Promise<mysql.Connection> => {
    return new Promise<mysql.Connection>((resolve, reject) => {
        mysql.createConnection(params)
            .then((connection) => {
                resolve(connection);
            })
            .catch(err => {
                reject(err);
                return;
            });
    });
}

const Query = async (connection: mysql.Connection, query: string) => {
    return new Promise((resolve, reject) => {
        connection.query(query)
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
                return;
            });
    });
}

export { Connect, Query };
