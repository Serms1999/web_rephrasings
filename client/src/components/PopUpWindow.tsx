import '../css/PopUpWindow.css';
import {IPopUpWindowProps} from "../interfaces/popup-window-props.ts";
import {Dispatch, SetStateAction, FormEvent} from "react";
import {ISentence} from "../interfaces/sentence.ts";

const handleSubmit = (event: FormEvent<HTMLFormElement>, switchShowWindow: Dispatch<SetStateAction<boolean>>,
                      handler: ((newSentence: ISentence) => void) | undefined) => {
    event.preventDefault();
    switchShowWindow(false);

    if (handler) {
        const newSentence: ISentence = {
            id: -1,
            // @ts-ignore
            sentence: event.target.sentence.value,
            // @ts-ignore
            keyword: event.target.keyword.value,
            // @ts-ignore
            sentence_start: event.target.start.value,
            // @ts-ignore
            sentence_end: event.target.end.value,
            // @ts-ignore
            answer: event.target.answer.value
        };
        handler(newSentence);
    }
}

const PopUpWindow = ({showWindow, switchShowWindow, handler, children} : IPopUpWindowProps) => {
    return (
        <>
        {
            showWindow &&
            <div className="overlay">
                <form className="popup-window" action="" method="post" onSubmit={(event) => {
                    handleSubmit(event, switchShowWindow, handler);
                }}>
                    { children }
                    <div className="popup-window-buttons">
                        <input type="button" value="Cancel" onClick={() => {switchShowWindow(false)}}/>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        }
        </>
    )
}

export default PopUpWindow;
