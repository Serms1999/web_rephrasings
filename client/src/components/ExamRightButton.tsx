import { ExamButtonProps } from "../interfaces/ExamButtonProps";

const ExamRightButton = ({ text, handler }: ExamButtonProps) => {
    return (
        <button className="rightButton" onClick={handler}> {text}</button>
    )
}

export default ExamRightButton;
