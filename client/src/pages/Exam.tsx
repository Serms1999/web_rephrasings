import '../css/Exam.css';
import {MutableRefObject, useRef, useState} from "react";
import ExamInit from "../components/ExamInit";
import ExamSentences from "../components/ExamSentences";
import ExamEnd from "../components/ExamEnd";
import {getSentenceCountFromApi} from "../api/api";
import {generateSentence} from "../tools/generateSentence";

export enum EXAM_PAGES {
    INIT,
    EXAM,
    END
}

export const MAX_SENTENCES = await getSentenceCountFromApi();

const Exam = () => {
    const [currentPage, updatePage] = useState(EXAM_PAGES.INIT);
    const [sentences, updateSentences] = useState([generateSentence(0)]);
    const sentenceCount = useRef() as MutableRefObject<HTMLInputElement>;
    const [userAnswers, setUserAnswers] = useState(['']);

    const pages = [
        <ExamInit sentenceCount={sentenceCount} updatePage={updatePage} updateSentences={updateSentences}
                  setUserAnswers={setUserAnswers} />,
        <ExamSentences sentences={sentences} userAnswers={userAnswers}
                       setUserAnswers={setUserAnswers} updatePage={updatePage} />,
        <ExamEnd sentences={sentences} userAnswers={userAnswers} updatePage={updatePage}
                 updateSentences={updateSentences} setUserAnswers={setUserAnswers} />
    ];

    return (
        <div className="examWindow">
            { pages[currentPage] }
        </div>
    )
}

export default Exam;
