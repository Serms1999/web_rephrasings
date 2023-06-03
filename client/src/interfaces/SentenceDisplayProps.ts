import  { ReactElement, Dispatch, SetStateAction } from "react";
import { ISentence } from "./ISentence";

export interface ISentenceDisplayProps {
    num: number,
    sentence: ISentence,
    setPopUpWindow: Dispatch<SetStateAction<ReactElement>>,
    switchShowWindow: Dispatch<SetStateAction<boolean>>,
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>
}
