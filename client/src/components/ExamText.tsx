import {IExamTextProps} from "../interfaces/ExamTextProps.ts";

const ExamText = ({ children }: IExamTextProps) => {
    return (
        <div className="examText">
            { children }
        </div>
    )
}

export default ExamText;
