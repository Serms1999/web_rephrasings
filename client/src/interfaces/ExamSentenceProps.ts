import {ISentence} from "./ISentence";
import {Dispatch, SetStateAction} from "react";
import {EXAM_PAGES} from "../pages/Exam";

export interface IExamSentenceProps {
    sentences: ISentence[],
    userAnswers: string[],
    setUserAnswers: Dispatch<SetStateAction<string[]>>,
    updatePage: Dispatch<SetStateAction<EXAM_PAGES>>,
}
