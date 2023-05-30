import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";
import {IResults} from "./Results.ts";

export interface ISentencesRecapProps {
    sentences: ISentence[],
    userAnswers: string[],
    results: IResults,
    setShowWindow: Dispatch<SetStateAction<boolean>>
}