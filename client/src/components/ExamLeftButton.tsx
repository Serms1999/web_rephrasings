import { ExamButtonProps } from "../interfaces/ExamButtonProps";

const ExamLeftButton = ({ text, handler }: ExamButtonProps) => {
    return (
        <button className="leftButton" onClick={handler} >{text}</button>
    )
}

export default ExamLeftButton;
