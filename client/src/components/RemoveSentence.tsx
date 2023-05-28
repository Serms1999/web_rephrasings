import "../css/RemoveSentence.css";
import {IRemoveSentenceProps} from "../interfaces/remove-sentence-props.ts";

const RemoveSentence = ({ children }: IRemoveSentenceProps) => {
    return (
        <div className="removeText">
            { children }
            <p>Are you sure to remove this sentence?</p>
        </div>
    )
}

export default RemoveSentence;
