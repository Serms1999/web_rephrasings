import { ExamButtonProps } from "../interfaces/ExamButtonProps.ts";

const ExamLeftButton = ({ text }: ExamButtonProps) => {
    return (
        <button className="leftButton">{text}</button>
    )
}

export default ExamLeftButton;
