import React, {ReactElement} from "react";

export interface ISentenceDisplayProps {
    num: number,
    id: number,
    text: string,
    popUpOptions: {add: ReactElement, edit: ReactElement, remove: ReactElement},
    setPopUpWindow: React.Dispatch<React.SetStateAction<ReactElement>>,
    switchShowWindow: React.Dispatch<React.SetStateAction<boolean>>
}
