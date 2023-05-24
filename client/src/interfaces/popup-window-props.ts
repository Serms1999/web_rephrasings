import React from "react";

export interface IPopUpWindowProps {
    showWindow: boolean,
    switchShowWindow: React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode
}