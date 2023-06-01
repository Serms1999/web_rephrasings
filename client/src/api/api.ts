import axios from "axios";
import {ISentence} from "../interfaces/ISentence.ts";
import {generateSentence} from "../tools/generateSentence.ts";
import {API_ROUTES} from "./api.routes.ts";

const getAPISentences = async (): Promise<ISentence[]> => {
    const url = API_ROUTES.GET_SENTENCES;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(10).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

const getAPISentenceCount = async (): Promise<number> => {
    const url = API_ROUTES.GET_SENTENCES_COUNT;
    return axios.get(url)
        .then(res => res.data.sentenceCount)
        .catch(_ => 10);
}

const postAPISentence = async (newSentence: ISentence): Promise<number> => {
    const url = API_ROUTES.ADD_SENTENCE;
    return axios.post(url, {sentence: newSentence})
        .then(res => res.data.insertId)
        .catch(_ => -1);
}

const putAPIEditSentence = async (newSentence: ISentence): Promise<void> => {
    const url = `${API_ROUTES.EDIT_SENTENCE}/${newSentence.id}`;
    await axios.put(url, {sentence: newSentence});
}

const deleteAPISentence = async (sentenceId: number): Promise<void> => {
    const url = `${API_ROUTES.DELETE_SENTENCE}/${sentenceId}`;
    await axios.delete(url);
}

const putAPIImportData = async (importedSentences: ISentence[]): Promise<number[]> => {
    const url = API_ROUTES.IMPORT_SENTENCES;
    return axios.put(url, importedSentences)
        .then(res => res.data.insertIndexes)
        .catch(_ => Array(importedSentences.length).fill(-1));
}

const getAPIExamSentences = async (num: number): Promise<ISentence[]> => {
    const url = `${API_ROUTES.EXAM_SENTENCES}/${num}`;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(num).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

export { getAPISentences, getAPISentenceCount, getAPIExamSentences, postAPISentence,
    putAPIEditSentence, putAPIImportData, deleteAPISentence }
