import config from "../config/config.ts";
import axios from "axios";
import {ISentence} from "../interfaces/ISentence.ts";

const getAPISentences = async (): Promise<ISentence[]> => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences`;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            const generateSentence = (num: number): ISentence => {
                return {
                    id: num,
                    sentence: `This is an example sentence to illustrate the design. ${num}`,
                    keyword: `keyword${num}`,
                    sentence_start: `start${num}`,
                    sentence_end: `end${num}`,
                    answer: `answer${num}`
                }
            }

            return [...Array(10).keys()]
                .map(n => generateSentence(n + 27));
        });
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

const getAPIExamSentences = (num: number) => {
    console.log(num)
}

export { getAPISentences, getAPIExamSentences, postAPISentence, putAPIEditSentence, removeAPISentence }
