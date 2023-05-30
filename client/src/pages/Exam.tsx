import '../css/Exam.css';
import {MutableRefObject, useRef, useState} from "react";
import ExamInit from "../components/ExamInit.tsx";
import ExamSentences from "../components/ExamSentences.tsx";
import ExamEnd from "../components/ExamEnd.tsx";
import {getAPISentenceCount} from "../api/api.ts";
import {generateSentence} from "../tools/generateSentence.ts";

export enum EXAM_PAGES {
    INIT,
    EXAM,
    END
}

export const MAX_SENTENCES = await getAPISentenceCount();

const Exam = () => {
    const [currentPage, updatePage] = useState(EXAM_PAGES.INIT);
    const [sentences, updateSentences] = useState([generateSentence(0)]);
    const sentenceCount = useRef() as MutableRefObject<HTMLInputElement>;
    const [userAnswers, setUserAnswers] = useState(['']);

    const pages = [
        <ExamInit sentenceCount={sentenceCount} updatePage={updatePage}
                  setUserAnswers={setUserAnswers} updateSentences={updateSentences} />,
        <ExamSentences sentences={sentences} userAnswers={userAnswers}
                       setUserAnswers={setUserAnswers} updatePage={updatePage} />,
        <ExamEnd sentences={sentences} userAnswers={userAnswers} />
    ];

    return (
        <div className="examWindow">
            { pages[currentPage] }
        </div>
    )
}

export default Exam;
