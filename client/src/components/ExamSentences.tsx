import ExamText from "./ExamText.tsx";
import {IExamSentenceProps} from "../interfaces/ExamSentenceProps.ts";
import ExamButtons from "./ExamButtons.tsx";
import ExamLeftButton from "./ExamLeftButton.tsx";
import ExamRightButton from "./ExamRightButton.tsx";
import {MutableRefObject, useRef, useState} from "react";
import {EXAM_PAGES} from "../pages/Exam.tsx";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import "../css/ExamSentences.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExamSentences = ({ sentences, userAnswers, setUserAnswers, updatePage }: IExamSentenceProps) => {
    const [sentenceIndex, changeSentence] = useState(0);
    const [currentSentence, updateSentence] = useState(sentences[sentenceIndex]);
    const [showAnswer, toggleShowAnswer] = useState(false);
    const answerInput = useRef() as MutableRefObject<HTMLInputElement>;

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
        updatePage(EXAM_PAGES.END);
    }

    const handleShowAnswer = () => {
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
                        { !showAnswer && <input type={"text"} ref={answerInput} defaultValue={userAnswers[sentenceIndex]}
                                                onChange={event => {
                                                    updateAnswer(event.target.value);
                                                }} /> }
                        { showAnswer && <input type={"text"} value={currentSentence.answer} disabled /> }
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
