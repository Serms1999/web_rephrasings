import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";
import {EXAM_PAGES} from "../pages/Exam.tsx";

export interface IExamSentenceProps {
    sentences: ISentence[],
    userAnswers: string[],
    setUserAnswers: Dispatch<SetStateAction<string[]>>,
    updatePage: Dispatch<SetStateAction<EXAM_PAGES>>,
}
