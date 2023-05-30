import ExamText from "./ExamText.tsx";
import {IExamEndProps} from "../interfaces/ExamEndProps.ts";

const ExamEnd = ({ sentences, userAnswers }: IExamEndProps) => {
    const compareAnswers = () => {
        const data = {
            goodNum: 0,
            checkList: [false]
        }
        data.checkList = sentences.map((s, index) => {
            let comp = s.answer === userAnswers[index];
            if (comp) data.goodNum++;
            return comp;
        })
        return data;
    }

    const getFails = (checkList: boolean[]) => {
        return sentences.filter((_, index) => checkList[index]);
    }

    const data = compareAnswers();
    console.log(data);
    console.log(getFails(data.checkList));
    return (
        <>
            <ExamText>
                <p>Final</p>
            </ExamText>
        </>
    )
}

export default ExamEnd;
