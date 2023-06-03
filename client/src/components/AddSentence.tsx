import SentenceForm from "./SentenceForm";
import {ISentence} from "../interfaces/ISentence";
import {AddSentenceProps} from "../interfaces/AddSentenceProps";
import {addApiSentence} from "../api/api";

const AddSentence = ({ currentSentences, updateSentences, setShowPopUp }: AddSentenceProps) => {

    const handleAddSentence = async (newSentence: ISentence) => {
        const sentencesCopy = [...currentSentences];
        newSentence.id = await addApiSentence(newSentence);
        sentencesCopy.push(newSentence);
        updateSentences(sentencesCopy);
    }

    return (
        <>
            <SentenceForm setShowPopUp={setShowPopUp} handler={handleAddSentence}/>
        </>
    )
}

export default AddSentence;
