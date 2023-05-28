import config from "../config/config.ts";
import axios from "axios";
import {ISentence} from "../interfaces/sentence.ts";

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

const getAPIExamSentences = (num: number) => {
    console.log(num)
}

export { getAPISentences, getAPIExamSentences, postAPISentence }
