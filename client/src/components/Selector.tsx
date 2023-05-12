import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISelectorProps } from "../interfaces/selector-props.ts";
import '../css/Selector.css';


const Selector = ({iconSource, text}: ISelectorProps) => {
    return (
        <button className="selector">
            <br />
            <FontAwesomeIcon icon={iconSource} />
            <p>{text}</p>
        </button>
    )
}

export default Selector;
