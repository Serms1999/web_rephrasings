import {ISentenceDisplayProps} from '../interfaces/SentenceDisplayProps.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/SentenceDisplay.css'
import EditSentence from "./EditSentence.tsx";
import RemoveSentence from "./RemoveSentence.tsx";

const SentenceDisplay = ({num, sentence, setPopUpWindow, switchShowWindow,
                             currentSentences, updateSentences}: ISentenceDisplayProps) => {
    return (
        <div className="sentenceDisplay">
            <p className="sentenceDisplayText">{num}. {sentence.sentence}</p>
            <div className="sentenceButtons">
                <button className="editSentence" onClick={() => {
                    switchShowWindow(true);
                    setPopUpWindow(<EditSentence currentSentences={currentSentences} currentValues={sentence}
                    updateSentences={updateSentences} setShowPopUp={switchShowWindow}/>);
                }}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className="removeSentence"  onClick={() => {
                    switchShowWindow(true);
                    setPopUpWindow(<RemoveSentence num={num} sentence={sentence} setShowPopUp={switchShowWindow}
                    currentSentences={currentSentences} updateSentences={updateSentences}/>);
                }}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    )
}

export default SentenceDisplay
