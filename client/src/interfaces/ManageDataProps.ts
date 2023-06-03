import {ISentence} from "./ISentence";
import {Dispatch, SetStateAction} from "react";

export interface IManageDataProps {
    currentSentences: ISentence[],
    updateSentences: Dispatch<SetStateAction<ISentence[]>>,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}