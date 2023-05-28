import React from "react";
import {ISentence} from "./sentence.ts";

export interface IPopUpWindowProps {
    showWindow: boolean,
    switchShowWindow: React.Dispatch<React.SetStateAction<boolean>>,
    handler?: (newSentence: ISentence) => void
    children?: React.ReactNode
}