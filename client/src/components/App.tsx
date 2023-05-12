import '../css/App.css';
//import Selector from "./Selector.tsx";
import SentencesPage from "./SentencesPage.tsx";
//import { faList, faListCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        /*<main>
            <div className="selectors">
                <Selector iconSource={faList} text={"Sentences"} />
                <Selector iconSource={faListCheck} text={"Exam"} />
            </div>
        </main>*/
        <SentencesPage />
    )
}

export default App;
