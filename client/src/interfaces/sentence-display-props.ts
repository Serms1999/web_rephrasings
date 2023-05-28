import  { ReactElement, Dispatch, SetStateAction } from "react";
import { ISentence } from "./sentence.ts";

export interface ISentenceDisplayProps {
    num: number,
    id: number,
    sentence: ISentence,
    setPopUpWindow: Dispatch<SetStateAction<ReactElement>>,
    switchShowWindow: Dispatch<SetStateAction<boolean>>,
    editHandler?: (newSentence: ISentence) => void,
    removeHandler?: (newSentence: ISentence) => void
}
