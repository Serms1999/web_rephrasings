import SentenceForm from "./SentenceForm.tsx";
import {ISentence} from "../interfaces/ISentence.ts";
import {AddSentenceProps} from "../interfaces/AddSentenceProps.ts";
import {postAPISentence} from "../api/api.ts";

const AddSentence = ({ currentSentences, updateSentences, setShowPopUp }: AddSentenceProps) => {

    const handleAddSentence = async (newSentence: ISentence) => {
        const sentencesCopy = [...currentSentences];
        newSentence.id = await postAPISentence(newSentence);
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
