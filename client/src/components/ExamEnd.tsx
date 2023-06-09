import ExamText from "./ExamText";
import {IExamEndProps} from "../interfaces/ExamEndProps";
import ExamButtons from "./ExamButtons";
import ExamLeftButton from "./ExamLeftButton";
import ExamRightButton from "./ExamRightButton";
import CustomChart from "./CustomChart";
import {IChartData} from "../interfaces/ChartData";
import PopUpWindow from "./PopUpWindow";
import {ISentence} from "../interfaces/ISentence";
import {useState} from "react";
import SentencesRecap from "./SentencesRecap";
import "../css/ExamEnd.css"
import {IResults} from "../interfaces/Results";
import {EXAM_PAGES} from "../pages/Exam";

export enum COLORS {
    CORRECT = "#00c49f",
    INCORRECT = "#ad5151"
}

const compareAnswers = (sentences: ISentence[], userAnswers: string[]) => {
    const results: IResults = {
        numCorrect: 0,
        numIncorrect: 0,
        correct: [],
        correctAnswers: [],
        incorrect: [],
        incorrectAnswer: [],
        checklist: []
    }

    sentences.forEach((sentence, index) => {
        const check = sentence.answer === userAnswers[index];
        if (check) {
            results.numCorrect++;
            results.correct.push(sentence);
            results.correctAnswers.push(sentence.answer);
        } else {
            results.numIncorrect++;
            results.incorrect.push(sentence);
            results.incorrectAnswer.push(userAnswers[index]);
        }
        results.checklist.push(check);
    })

    return results;
}

const ExamEnd = ({ sentences, userAnswers, updatePage, updateSentences, setUserAnswers }: IExamEndProps) => {
    const [showWindow, setShowWindow] = useState(false);
    const [recapSentences, setRecapSentences] = useState(sentences);
    const [recapAnswers, setRecapAnswers] = useState(userAnswers);

    const results = compareAnswers(sentences, userAnswers);

    const dataChart: IChartData[] = [
        { name: "correct", value: results.numCorrect },
        { name: "incorrect", value: results.numIncorrect}
    ];

    const handleRedoIncorrect = () => {
        updateSentences(results.incorrect);
        setUserAnswers(Array(results.incorrect.length).fill(''));
        updatePage(EXAM_PAGES.EXAM);
    }

    const clickHandlers = [
        // Correct handler
        () => {
            setRecapSentences(results.correct);
            setRecapAnswers(results.correctAnswers);
            setShowWindow(true);
        },
        // Incorrect handler
        () => {
            setRecapSentences(results.incorrect);
            setRecapAnswers(results.incorrectAnswer);
            setShowWindow(true);
        },
        // All sentences
        () => {
            setRecapSentences(sentences);
            setRecapAnswers(userAnswers);
            setShowWindow(true);
        }
    ];

    return (
        <>
            <ExamText>
                <CustomChart data={dataChart} clickHandlers={clickHandlers} />
            </ExamText>
            <ExamButtons>
                <>
                    { results.numIncorrect > 0 &&
                        <ExamLeftButton text={"Redo incorrect ❭"} handler={handleRedoIncorrect} />
                    }
                    <button className="recapButton" onClick={clickHandlers[2]}>Show Recap ❭</button>
                    <ExamRightButton text={"Finish ❭"} handler={() => {updatePage(EXAM_PAGES.INIT)}} />
                </>
            </ExamButtons>
            <PopUpWindow showWindow={showWindow}>
                <SentencesRecap sentences={recapSentences} userAnswers={recapAnswers}
                                results={results} setShowWindow={setShowWindow} />
            </PopUpWindow>
        </>
    )
}

export default ExamEnd;
