import config from "../config/config.ts";

interface ApiRoutes {
    GET_SENTENCES: string,
    GET_SENTENCES_COUNT: string,
    ADD_SENTENCE: string
    EDIT_SENTENCE: string,
    DELETE_SENTENCE: string,
    IMPORT_SENTENCES: string,
    EXAM_SENTENCES: string
}

const SERVER_URL = `${config.https ? "https" : "http"}://${config.server.hostname}:${config.server.port}`;

export const API_ROUTES: ApiRoutes  = {
    GET_SENTENCES: `${SERVER_URL}/sentences`,
    GET_SENTENCES_COUNT: `${SERVER_URL}/sentences/count`,
    ADD_SENTENCE: `${SERVER_URL}/sentences`,
    EDIT_SENTENCE: `${SERVER_URL}/sentences/edit`,
    DELETE_SENTENCE: `${SERVER_URL}/sentences/delete`,
    IMPORT_SENTENCES: `${SERVER_URL}/sentences/import`,
    EXAM_SENTENCES: `${SERVER_URL}/exam`
}
