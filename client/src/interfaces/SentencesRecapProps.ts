import {ISentence} from "./ISentence";
import {Dispatch, SetStateAction} from "react";
import {IResults} from "./Results";

export interface ISentencesRecapProps {
    sentences: ISentence[],
    userAnswers: string[],
    results: IResults,
    setShowWindow: Dispatch<SetStateAction<boolean>>
}