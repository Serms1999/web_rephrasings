import '../css/EditSentence.css';
import {IEditSentenceProps} from "../interfaces/edit-sentence-props.ts";

const EditSentence = ({ currentValues }: IEditSentenceProps) => {
    return (
        <div className="new-sentence-inputs">
            <div className="formItem">
                <label htmlFor="GET-sentence">Original sentence:</label>
                <input id="GET-sentence" type="text" name="sentence"
                       defaultValue={currentValues?.sentence} required/>
            </div>
            <div className="formItem">
                <label htmlFor="GET-sentence">Keyword:</label>
                <input id="GET-keyword" type="text" name="sentence"
                       defaultValue={currentValues?.keyword} required/>
            </div>
            <div className="formItem">
                <label htmlFor="GET-start">Start of the new sentence:</label>
                <input id="GET-start" type="text" name="sentence"
                       defaultValue={currentValues?.sentence_start} required/>
            </div>
            <div className="formItem">
                <label htmlFor="GET-answer">Correct answer:</label>
                <input id="GET-answer" type="text" name="sentence"
                       defaultValue={currentValues?.sentence_end} required/>
            </div>
            <div className="formItem">
                <label htmlFor="GET-end">End of the new sentence:</label>
                <input id="GET-end" type="text" name="sentence"
                       defaultValue={currentValues?.answer} required/>
            </div>
        </div>
    )
}

export default EditSentence;
