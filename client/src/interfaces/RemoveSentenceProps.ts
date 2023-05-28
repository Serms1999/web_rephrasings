import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";

export interface IRemoveSentenceProps {
    num: number,
    sentence: ISentence,
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}
