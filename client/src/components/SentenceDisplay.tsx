import {ISentenceDisplayProps} from '../interfaces/sentence-display-props.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/SentenceDisplay.css'

const handleEditButton = (id: number) => {
    console.log(`Editing ${id} sentence`);
}

const handleRemoveButton = (id: number) => {
    console.log(`Removing ${id} sentence`);
}

const SentenceDisplay = ({num, id, text, popUpOptions, setPopUpWindow, switchShowWindow}: ISentenceDisplayProps) => {
    return (
        <div className="sentenceDisplay">
            <p className="sentenceDisplayText">{num}. {text}</p>
            <div className="sentenceButtons">
                <button className="editSentence" onClick={() => {
                    switchShowWindow(true);
                    setPopUpWindow(popUpOptions.edit);
                    handleEditButton(id);
                }}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className="removeSentence"  onClick={() => {
                    switchShowWindow(true);
                    setPopUpWindow(popUpOptions.remove);
                    handleRemoveButton(id);
                }}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    )
}

export default SentenceDisplay
