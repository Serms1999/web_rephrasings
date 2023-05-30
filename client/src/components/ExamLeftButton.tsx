import { ExamButtonProps } from "../interfaces/ExamButtonProps.ts";

const ExamLeftButton = ({ text, handler }: ExamButtonProps) => {
    return (
        <button className="leftButton" onClick={handler} >{text}</button>
    )
}

export default ExamLeftButton;
