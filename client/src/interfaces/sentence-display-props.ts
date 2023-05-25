import React, {ReactElement} from "react";
import { ISentence } from "./sentence.ts";

export interface ISentenceDisplayProps {
    num: number,
    id: number,
    sentence: ISentence,
    setPopUpWindow: React.Dispatch<React.SetStateAction<ReactElement>>,
    switchShowWindow: React.Dispatch<React.SetStateAction<boolean>>
}
