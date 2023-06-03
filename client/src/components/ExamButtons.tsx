import {IExamButtonsProps} from "../interfaces/ExamButtonsProps";

const ExamButtons = ({ children }: IExamButtonsProps) => {
    return (
        <div className="examButtons">
            { children }
        </div>
    )
}

export default ExamButtons;
