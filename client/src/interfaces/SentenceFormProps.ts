import {ISentence} from "./ISentence.ts";
import {Dispatch, SetStateAction} from "react";

export interface ISentenceFormProps {
    currentValues?: ISentence,
    handler: (newSentence: ISentence) => void,
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}