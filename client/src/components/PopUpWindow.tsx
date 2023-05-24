import '../css/PopUpWindow.css';
import {IPopUpWindowProps} from "../interfaces/popup-window-props.ts";

const PopUpWindow = ({showWindow, switchShowWindow, children} : IPopUpWindowProps) => {
    return (
        <>
        {
            showWindow &&
            <div className="overlay">
                <form className="popup-window" action="" method="post">
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
