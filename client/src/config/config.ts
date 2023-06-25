import { env } from '../env';

const SERVER_HOSTNAME: string = env.REACT_APP_SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT = env.REACT_APP_SERVER_PORT ?? 8000;
const HTTPS = env.REACT_APP_HTTPS.toLowerCase() === 'true';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    https: HTTPS
};

export default config;
