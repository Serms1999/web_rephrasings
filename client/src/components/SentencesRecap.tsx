import "../css/SentencesRecap.css"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import ExamLeftButton from "./ExamLeftButton.tsx";
import ExamRightButton from "./ExamRightButton.tsx";
import {COLORS} from "./ExamEnd.tsx";
import {ISentencesRecapProps} from "../interfaces/SentencesRecapProps.ts";

const SentencesRecap = ({sentences, userAnswers, results, setShowWindow}: ISentencesRecapProps) => {
    const [sentenceIndex, updateSentence] = useState(0);

    const handleBack = () => {
        let index = sentenceIndex - 1;
        updateSentence(index);
    }

    const handleNext = () => {
        let index = sentenceIndex + 1;
        updateSentence(index);
    }

    return (
        <>
            <button className="closeRecap" onClick={() => {setShowWindow(false);}}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
            <div className="sentencesRecapText">
                <p className="originalSentence">{sentences[sentenceIndex].sentence}</p>
                <p className="keyword">{sentences[sentenceIndex].keyword}</p>
                <div className="newSentence">
                    <p className="firstPart">{sentences[sentenceIndex].sentence_start}</p>
                    <input type={"text"} className="answer" value={sentences[sentenceIndex].answer} disabled />
                    <p className="lastPart">{sentences[sentenceIndex].sentence_end}</p>
                </div>
                <div className="userAnswer">
                    <p>Your answer:</p>
                    <input type={"text"} className="answer" value={userAnswers[sentenceIndex]} disabled />
                    { results.correct.includes(sentences[sentenceIndex])
                        ? <FontAwesomeIcon icon={faCheck} style={{color: COLORS.CORRECT}} />
                        : <FontAwesomeIcon icon={faXmark} style={{color: COLORS.INCORRECT}} />
                    }
                </div>
            </div>
            <div className="sentencesRecapButtons">
                { sentenceIndex > 0 && <ExamLeftButton text={"❬ Back"} handler={handleBack} /> }
                { sentenceIndex < sentences.length - 1 && <ExamRightButton text={"Next ❭"} handler={handleNext} /> }
            </div>
        </>
    )
}

export default SentencesRecap;
