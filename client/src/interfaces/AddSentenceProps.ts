import {Dispatch, SetStateAction} from "react";
import {ISentence} from "./ISentence";

export interface AddSentenceProps {
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}
