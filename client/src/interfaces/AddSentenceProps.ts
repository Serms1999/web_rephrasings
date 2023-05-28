import {Dispatch, SetStateAction} from "react";
import {ISentence} from "./ISentence.ts";

export interface AddSentenceProps {
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}
