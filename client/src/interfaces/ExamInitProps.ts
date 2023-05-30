import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {EXAM_PAGES} from "../pages/Exam.tsx";
import {ISentence} from "./ISentence.ts";

export interface IExamInitProps {
    updatePage: Dispatch<SetStateAction<EXAM_PAGES>>,
    sentenceCount: MutableRefObject<HTMLInputElement>,
    setUserAnswers: Dispatch<SetStateAction<string[]>>,
    updateSentences: Dispatch<SetStateAction<ISentence[]>>
}
