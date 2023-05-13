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

const SentenceDisplay = ({num, id, text}: ISentenceDisplayProps) => {
    return (
        <div className="sentenceDisplay">
            <p className="sentenceDisplayText">{num}. {text}</p>
            <div className="sentenceButtons">
                <button className="editSentence" onClick={() => {handleEditButton(id)}}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className="removeSentence"  onClick={() => {handleRemoveButton(id)}}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    )
}

export default SentenceDisplay
