import axios from "axios";
import {ISentence} from "../interfaces/ISentence";
import {generateSentence} from "../tools/generateSentence";
import {API_ROUTES} from "./api.routes";

const getSentencesFromApi = async (): Promise<ISentence[]> => {
    const url = API_ROUTES.GET_SENTENCES;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(10).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

const getSentenceCountFromApi = async (): Promise<number> => {
    const url = API_ROUTES.GET_SENTENCES_COUNT;
    return axios.get(url)
        .then(res => res.data.sentenceCount)
        .catch(_ => 10);
}

const addApiSentence = async (newSentence: ISentence): Promise<number> => {
    const url = API_ROUTES.ADD_SENTENCE;
    return axios.post(url, {sentence: newSentence})
        .then(res => res.data.insertId)
        .catch(_ => -1);
}

const editApiSentence = async (newSentence: ISentence): Promise<void> => {
    const url = `${API_ROUTES.EDIT_SENTENCE}/${newSentence.id}`;
    await axios.put(url, {sentence: newSentence});
}

const deleteSentenceFromApi = async (sentenceId: number): Promise<void> => {
    const url = `${API_ROUTES.DELETE_SENTENCE}/${sentenceId}`;
    await axios.delete(url);
}

const importSentencesIntoDatabaseApi = async (importedSentences: ISentence[]): Promise<number[]> => {
    const url = API_ROUTES.IMPORT_SENTENCES;
    return axios.put(url, importedSentences)
        .then(res => res.data.insertIndexes)
        .catch(_ => Array(importedSentences.length).fill(-1));
}

const getExamSentencesFromApi = async (num: number): Promise<ISentence[]> => {
    const url = `${API_ROUTES.EXAM_SENTENCES}/${num}`;
    return axios.get(url)
        .then(res => res.data)
        .catch(_ => {
            return [...Array(num).keys()]
                    .map(n => generateSentence(n + 27));
        });
}

const eraseApiDatabase = async (): Promise<boolean> => {
    const url = API_ROUTES.ERASE_DATABASE;
    return axios.delete(url)
        .then(_ => true)
        .catch(_ => false);
}

export { getSentencesFromApi, getSentenceCountFromApi, getExamSentencesFromApi, addApiSentence,
    editApiSentence, importSentencesIntoDatabaseApi, deleteSentenceFromApi, eraseApiDatabase }
