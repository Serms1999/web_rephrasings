import ExamText from "./ExamText.tsx";
import ExamButtons from "./ExamButtons.tsx";
import ExamRightButton from "./ExamRightButton.tsx";
import {IExamInitProps} from "../interfaces/ExamInitProps.ts";
import {EXAM_PAGES, MAX_SENTENCES} from "../pages/Exam.tsx";
import {getAPIExamSentences} from "../api/api.ts";

const ExamInit = ({sentenceCount, updatePage, updateSentences}: IExamInitProps) => {
    const handleStart = () => {
        const currentValue = parseInt(sentenceCount.current.value);
        if (1 <= currentValue && currentValue <= MAX_SENTENCES) {
            getAPIExamSentences(currentValue)
                .then(sentences => {
                    updateSentences(sentences)
                    updatePage(EXAM_PAGES.EXAM);
                });
        }
    }

    return (
        <>
            <ExamText>
                <>
                    <p className="initSentence">Number of questions:</p>
                    <input name="sentenceNumber" type="number" min="1" defaultValue="6" max={MAX_SENTENCES} ref={sentenceCount} />
                </>
            </ExamText>
            <ExamButtons>
                <ExamRightButton text={"Start ❭"} handler={handleStart}/>
            </ExamButtons>
        </>
    )
}

export default ExamInit;
