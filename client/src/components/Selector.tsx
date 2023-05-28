import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISelectorProps } from "../interfaces/SelectorProps.ts";
import '../css/Selector.css';
import {Link} from "react-router-dom";


const Selector = ({iconSource, text}: ISelectorProps) => {
    return (
        <Link to={`/${text.toLowerCase()}`}>
            <button className="selector">
                <br />
                <FontAwesomeIcon icon={iconSource} />
                <p>{text}</p>
            </button>
        </Link>
    )
}

export default Selector;
