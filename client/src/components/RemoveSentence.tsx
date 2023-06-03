import {IRemoveSentenceProps} from "../interfaces/RemoveSentenceProps";
import "../css/RemoveSentence.css";
import {ISentence} from "../interfaces/ISentence";
import {deleteSentenceFromApi} from "../api/api";

const RemoveSentence = ({ num, sentence, setShowPopUp, currentSentences, updateSentences }: IRemoveSentenceProps) => {

    const handleRemoveSentence = async () => {
        const sentencesCopy: ISentence[] = [...currentSentences].filter(s => s.id !== sentence.id);
        updateSentences(sentencesCopy);
        await deleteSentenceFromApi(sentence.id);
        setShowPopUp(false);
    }

    return (
        <form className="popup-window" action="" method="post" onSubmit={async (event) => {
            event.preventDefault();
            await handleRemoveSentence();
        }}>
            <div className="removeText">
                <p className="sentenceDisplayText">{num}. {sentence.sentence}</p>
                <p>Are you sure to remove this sentence?</p>
            </div>
            <div className="popup-window-buttons">
                <input type="button" value="Cancel" onClick={_ => {
                    setShowPopUp(false);
                }}/>
                <input type="submit" value="Save"/>
            </div>
        </form>
    )
}

export default RemoveSentence;
