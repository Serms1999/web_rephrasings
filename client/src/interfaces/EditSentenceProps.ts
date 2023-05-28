import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";

export interface EditSentenceProps {
    currentValues: ISentence,
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}
