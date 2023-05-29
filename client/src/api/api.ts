import config from "../config/config.ts";
import axios from "axios";
import {ISentence} from "../interfaces/ISentence.ts";
import {generateSentence} from "../tools/generateSentence.ts";

const getAPISentences = async (): Promise<ISentence[]> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences`;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(10).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

const getAPISentenceCount = async (): Promise<number> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences/count`;
    return axios.get(url)
        .then(res => res.data.sentenceCount)
        .catch(_ => 10);
}

const postAPISentence = async (newSentence: ISentence): Promise<number> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences`;
    return axios.post(url, {sentence: newSentence})
        .then(res => res.data.insertId)
        .catch(_ => -1);
}

const putAPIEditSentence = async (newSentence: ISentence): Promise<void> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences/edit/${newSentence.id}`;
    await axios.put(url, {sentence: newSentence});
}

const removeAPISentence = async (sentenceId: number): Promise<void> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences/delete/${sentenceId}`;
    await axios.delete(url);
}

const getAPIExamSentences = async (num: number): Promise<ISentence[]> => {
    const url = `http://${config.server.hostname}:${config.server.port}/exam/${num}`;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(num).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

export { getAPISentences, getAPISentenceCount, getAPIExamSentences, postAPISentence, putAPIEditSentence, removeAPISentence }
