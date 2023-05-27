import SentenceDisplay from '../components/SentenceDisplay.tsx';
import { ISentence } from '../interfaces/sentence.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';
import EditSentence from "../components/EditSentence.tsx";
import PopUpWindow from "../components/PopUpWindow.tsx";
import {useState} from "react";
import {getAPISentences} from "../api/api.ts";

const currentSentences: ISentence[] = await getAPISentences();

const handleNewSentence = () => {
    console.log('Adding new sentence');
}

const Sentences = () => {
    const [showPopUpWindow, setShowPopUpWindow] = useState(false);
    const [currentPopUpWindow, setPopUpWindow] = useState(<EditSentence />);

    return (
        <>
            <article className="sentencesPage">
                <section className="sentences">
                {
                    currentSentences.map((sentence, index) => {
                        return <SentenceDisplay key={sentence.id} num={index + 1} id={sentence.id}
                                                sentence={sentence}
                                                setPopUpWindow = {setPopUpWindow}
                                                switchShowWindow={setShowPopUpWindow} />;
                    })
                }
                </section>
                <button className='addSentence' onClick={() => {
                    setShowPopUpWindow(true);
                    setPopUpWindow(<EditSentence />);
                    handleNewSentence();
                }}>
                    <FontAwesomeIcon icon={faPlus} /> Add new
                </button>
            </article>
            <PopUpWindow showWindow={showPopUpWindow} switchShowWindow={setShowPopUpWindow}>
                { currentPopUpWindow }
            </PopUpWindow>
        </>
    )
}

export default Sentences;
