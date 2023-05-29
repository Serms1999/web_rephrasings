import {ISentence} from "../interfaces/ISentence.ts";

export const generateSentence = (num: number): ISentence => {
    return {
        id: num,
        sentence: `This is an example sentence to illustrate the design. ${num}`,
        keyword: `keyword${num}`,
        sentence_start: `start${num}`,
        sentence_end: `end${num}`,
        answer: `answer${num}`
    }
}
