const SERVER_HOSTNAME: string = process.env.REACT_APP_SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT ?? 8000;
const HTTPS = process.env.REACT_APP_HTTPS === 'true';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    https: HTTPS
};

export default config;
