import ExamText from "./ExamText";
import {IExamSentenceProps} from "../interfaces/ExamSentenceProps";
import ExamButtons from "./ExamButtons";
import ExamLeftButton from "./ExamLeftButton";
import ExamRightButton from "./ExamRightButton";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {EXAM_PAGES} from "../pages/Exam";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import "../css/ExamSentences.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let start = 0;

const ExamSentences = ({ sentences, userAnswers, setUserAnswers, updatePage }: IExamSentenceProps) => {
    const [sentenceIndex, changeSentence] = useState(0);
    const [currentSentence, updateSentence] = useState(sentences[sentenceIndex]);
    const [showAnswer, toggleShowAnswer] = useState(false);
    const answerInput = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        start = Date.now();
    }, []);

    const handleBack = () => {
        toggleShowAnswer(false);
        let index = sentenceIndex - 1;
        changeSentence(index);
        updateSentence(sentences[index]);
        answerInput.current.value = userAnswers[index];
    }

    const handleNext = () => {
        toggleShowAnswer(false);
        let index = sentenceIndex + 1;
        changeSentence(index);
        updateSentence(sentences[index]);
        answerInput.current.value = userAnswers[index];
    }

    const handleFinish = () => {
        const totalTime = new Date(Date.now() - start);
        const time = totalTime.toLocaleTimeString('es-ES', {minute: "2-digit", second: "2-digit"});
        if (window.confirm(`Are you sure to finish the test?\nTime: ${time}`)) {
            answerInput.current.value = "";
            updatePage(EXAM_PAGES.END);
        }
    }

    const handleShowAnswer = () => {
        answerInput.current.value = showAnswer ? userAnswers[sentenceIndex] : currentSentence.answer;
        toggleShowAnswer(!showAnswer);
    }

    const updateAnswer = (answer: string) => {
        const answersCopy = [...userAnswers];
        answersCopy[sentenceIndex] = answer;
        setUserAnswers(answersCopy);
    }

    return (
        <>
            <ExamText>
                <div className="question">
                    <p className="questionSentence">{sentenceIndex + 1}. {currentSentence.sentence}</p>
                    <p className="questionKeyword">{currentSentence.keyword}</p>
                    <div className="newSentence">
                        <p className="firstPart">{currentSentence.sentence_start}</p>
                        <input type={"text"} ref={answerInput} defaultValue={userAnswers[sentenceIndex]}
                               disabled={showAnswer} onChange={event => {
                                   updateAnswer(event.target.value);
                        }}/>
                        <p className="lastPart">{currentSentence.sentence_end}</p>
                        <button className="showAnswer" onClick={handleShowAnswer}>
                            <FontAwesomeIcon icon={faEye}/> {showAnswer ? "Hide" : "Show"} answer
                        </button>
                    </div>
                </div>
            </ExamText>
            <ExamButtons>
                <>
                    { sentenceIndex > 0 && <ExamLeftButton text={"❬ Back"} handler={handleBack} /> }
                    { sentenceIndex < sentences.length - 1 &&
                        <ExamRightButton text={"Next ❭"} handler={handleNext} /> }
                    { sentenceIndex === sentences.length - 1 &&
                        <ExamRightButton text={"Finish ❭"} handler={handleFinish} /> }
                </>
            </ExamButtons>
        </>
    )
}

export default ExamSentences;
