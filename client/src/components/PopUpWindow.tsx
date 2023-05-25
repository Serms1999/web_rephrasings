import '../css/PopUpWindow.css';
import {IPopUpWindowProps} from "../interfaces/popup-window-props.ts";
import {Dispatch, SetStateAction, FormEvent} from "react";

const handleSubmit = (event: FormEvent<HTMLFormElement>, switchShowWindow: Dispatch<SetStateAction<boolean>>) => {
    event.preventDefault();
    switchShowWindow(false);
}

const PopUpWindow = ({showWindow, switchShowWindow, children} : IPopUpWindowProps) => {
    return (
        <>
        {
            showWindow &&
            <div className="overlay">
                <form className="popup-window" action="" method="post" onSubmit={(event) => {
                    handleSubmit(event, switchShowWindow);
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
