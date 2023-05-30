import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";
import {EXAM_PAGES} from "../pages/Exam.tsx";

export interface IExamEndProps {
    sentences: ISentence[],
    userAnswers: string[],
    updatePage: Dispatch<SetStateAction<EXAM_PAGES>>,
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setUserAnswers: Dispatch<SetStateAction<string[]>>
}