import config from "../config/config.ts";
import axios from "axios";
import {ISentence} from "../interfaces/sentence.ts";

const getAPISentences = async () => {
    const url = `http://${config.server.hostname}:${config.server.port}/sentences`;
    const res = await axios.get(url);
    return <ISentence[]>res.data;
}

const getAPIExamSentences = (num: number) => {
    console.log(num)
}

export { getAPISentences, getAPIExamSentences }
