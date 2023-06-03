import {ISentence} from "./ISentence";

export interface IResults {
    numCorrect: number,
    numIncorrect: number,
    correct: ISentence[],
    correctAnswers: string[],
    incorrect: ISentence[],
    incorrectAnswer: string[],
    checklist: boolean[]
}