import {ISentenceFormProps} from "../interfaces/SentenceFormProps";
import "../css/SentenceForm.css";
import {ISentence} from "../interfaces/ISentence";
import {MutableRefObject, useRef} from "react";

const SentenceForm = ({ currentValues, setShowPopUp, handler }: ISentenceFormProps) => {
    const sentence = useRef() as MutableRefObject<HTMLInputElement>;
    const keyword = useRef() as MutableRefObject<HTMLInputElement>;
    const sentence_start = useRef() as MutableRefObject<HTMLInputElement>;
    const sentence_end = useRef() as MutableRefObject<HTMLInputElement>;
    const answer = useRef() as MutableRefObject<HTMLInputElement>;


    return (
        <form className="popup-window" action="" method="post" onSubmit={event => {
            event.preventDefault();
            setShowPopUp(false);

            const newSentence: ISentence = {
                id: currentValues?.id ?? -1,
                sentence: sentence.current.value,
                keyword: keyword.current.value,
                sentence_start: sentence_start.current.value,
                sentence_end: sentence_end.current.value,
                answer: answer.current.value,
            };
            handler(newSentence);
        }}>
            <div className="new-sentence-inputs">
                <div className="formItem">
                    <label htmlFor="GET-sentence">Original sentence:</label>
                    <input id="GET-sentence" type="text" name="sentence"
                           defaultValue={currentValues?.sentence} ref={sentence} required/>
                </div>
                <div className="formItem">
                    <label htmlFor="GET-keyword">Keyword:</label>
                    <input id="GET-keyword" type="text" name="keyword"
                           defaultValue={currentValues?.keyword} ref={keyword} required/>
                </div>
                <div className="formItem">
                    <label htmlFor="GET-start">Start of the new sentence:</label>
                    <input id="GET-start" type="text" name="start"
                           defaultValue={currentValues?.sentence_start} ref={sentence_start} required/>
                </div>
                <div className="formItem">
                    <label htmlFor="GET-answer">Correct answer:</label>
                    <input id="GET-answer" type="text" name="answer"
                           defaultValue={currentValues?.answer} ref={answer} required/>
                </div>
                <div className="formItem">
                    <label htmlFor="GET-end">End of the new sentence:</label>
                    <input id="GET-end" type="text" name="end"
                           defaultValue={currentValues?.sentence_end} ref={sentence_end} required/>
                </div>
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

export default SentenceForm;
