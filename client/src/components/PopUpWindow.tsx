import '../css/PopUpWindow.css';
import {IPopUpWindowProps} from "../interfaces/PopUpWindowProps";

const PopUpWindow = ({showWindow, children} : IPopUpWindowProps) => {
    return (
        <>
            {
                showWindow &&
                <div className="overlay">
                    <div className="popup-window">
                        { children }
                    </div>
                </div>
            }
        </>
    )
}

export default PopUpWindow;