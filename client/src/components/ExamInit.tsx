import ExamText from "./ExamText";
import ExamButtons from "./ExamButtons";
import ExamRightButton from "./ExamRightButton";
import {IExamInitProps} from "../interfaces/ExamInitProps";
import {EXAM_PAGES, MAX_SENTENCES} from "../pages/Exam";
import {getExamSentencesFromApi} from "../api/api";

const ExamInit = ({sentenceCount, updatePage, setUserAnswers, updateSentences}: IExamInitProps) => {
    const handleStart = () => {
        const currentValue = parseInt(sentenceCount.current.value);
        if (1 <= currentValue && currentValue <= MAX_SENTENCES) {
            getExamSentencesFromApi(currentValue)
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
