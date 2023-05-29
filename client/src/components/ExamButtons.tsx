import {IExamButtonsProps} from "../interfaces/ExamButtonsProps.ts";

const ExamButtons = ({ children }: IExamButtonsProps) => {
    return (
        <div className="examButtons">
            { children }
        </div>
    )
}

export default ExamButtons;
