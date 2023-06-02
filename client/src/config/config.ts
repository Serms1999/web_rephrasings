const SERVER_HOSTNAME: string = import.meta.env.SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT = import.meta.env.SERVER_PORT ?? 8000;
const HTTPS = import.meta.env.HTTPS === 'true';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    https: HTTPS
};

export default config;
