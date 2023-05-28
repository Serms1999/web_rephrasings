import SentenceDisplay from '../components/SentenceDisplay.tsx';
import { ISentence } from '../interfaces/sentence.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';
import EditSentence from "../components/EditSentence.tsx";
import PopUpWindow from "../components/PopUpWindow.tsx";
import {useState} from "react";
import {getAPISentences, postAPISentence} from "../api/api.ts";

const apiSentences = await getAPISentences();

const Sentences = () => {
    const [showPopUpWindow, setShowPopUpWindow] = useState(false);
    const [currentPopUpWindow, setPopUpWindow] = useState(<EditSentence />);
    const [currentSentences, updateSentences] = useState(apiSentences);

    const handleNewSentence = async (newSentence: ISentence) => {
        console.log('Adding new sentence');
        console.log(newSentence);

        const sentencesCopy = [...currentSentences];
        newSentence.id = await postAPISentence(newSentence);
        sentencesCopy.push(newSentence);
        updateSentences(sentencesCopy);
    }

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
                }}>
                    <FontAwesomeIcon icon={faPlus} /> Add new
                </button>
            </article>
            <PopUpWindow showWindow={showPopUpWindow} switchShowWindow={setShowPopUpWindow} handler={handleNewSentence}>
                { currentPopUpWindow }
            </PopUpWindow>
        </>
    )
}

export default Sentences;
