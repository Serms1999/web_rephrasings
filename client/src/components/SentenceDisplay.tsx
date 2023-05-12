import {ISentenceDisplayProps} from '../interfaces/sentence-display-props.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/SentenceDisplay.css'

const SentenceDisplay = ({id, text}: ISentenceDisplayProps) => {
    return (
        <div className="sentenceDisplay">
            <p className="sentenceDisplayText">{id}. {text}</p>
            <button className="editSentence">
                <FontAwesomeIcon icon={faPencil} />
            </button>
            <button className="removeSentence">
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    )
}

export default SentenceDisplay
