import {ISentence} from "../interfaces/ISentence.ts";
import {editApiSentence} from "../api/api.ts";
import SentenceForm from "./SentenceForm.tsx";
import {EditSentenceProps} from "../interfaces/EditSentenceProps.ts";

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
