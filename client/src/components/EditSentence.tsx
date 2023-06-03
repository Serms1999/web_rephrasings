import {ISentence} from "../interfaces/ISentence";
import {editApiSentence} from "../api/api";
import SentenceForm from "./SentenceForm";
import {EditSentenceProps} from "../interfaces/EditSentenceProps";

const EditSentence = ({ currentValues, currentSentences, updateSentences, setShowPopUp }: EditSentenceProps) => {
    const handleEditSentence = async (newSentence: ISentence) => {
        let sentencesCopy = [...currentSentences];
        const index = sentencesCopy.indexOf(currentValues);
        sentencesCopy[index] = newSentence;
        updateSentences(sentencesCopy);
        await editApiSentence(newSentence);
        setShowPopUp(false);
    }

    return (
        <>
            <SentenceForm currentValues={currentValues} setShowPopUp={setShowPopUp} handler={handleEditSentence}/>
        </>
    )
}

export default EditSentence;
