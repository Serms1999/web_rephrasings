import ExamText from "./ExamText.tsx";
import ExamButtons from "./ExamButtons.tsx";
import ExamRightButton from "./ExamRightButton.tsx";
import {IExamInitProps} from "../interfaces/ExamInitProps.ts";
import {EXAM_PAGES, MAX_SENTENCES} from "../pages/Exam.tsx";
import {getAPIExamSentences} from "../api/api.ts";

const ExamInit = ({sentenceCount, updatePage, setUserAnswers, updateSentences}: IExamInitProps) => {
    const handleStart = () => {
        const currentValue = parseInt(sentenceCount.current.value);
        if (1 <= currentValue && currentValue <= MAX_SENTENCES) {
            getAPIExamSentences(currentValue)
                .then(sentences => {
                    updateSentences(sentences);
                    setUserAnswers(Array(sentences.length).fill(''));
                    updatePage(EXAM_PAGES.EXAM);
                });
        }
    }

    return (
        <>
            <ExamText>
                <>
                    <p className="initSentence">Number of questions:</p>
                    <input name="sentenceNumber" type="number" min="1"
                           defaultValue={MAX_SENTENCES >= 6 ? 6 : MAX_SENTENCES}
                           max={MAX_SENTENCES} ref={sentenceCount} />
                </>
            </ExamText>
            <ExamButtons>
                <ExamRightButton text={"Start ❭"} handler={handleStart}/>
            </ExamButtons>
        </>
    )
}

export default ExamInit;
