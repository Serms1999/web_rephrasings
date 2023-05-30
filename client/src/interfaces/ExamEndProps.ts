import {ISentence} from "./ISentence.ts";

export interface IExamEndProps {
    sentences: ISentence[],
    userAnswers: string[]
}