import SentenceDisplay from '../components/SentenceDisplay';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';
import {useState} from "react";
import {getSentencesFromApi} from "../api/api";
import PopUpWindow from "../components/PopUpWindow";
import AddSentence from "../components/AddSentence";
import ManageData from "../components/ManageData";

const apiSentences = await getSentencesFromApi();

const Sentences = () => {
    const [showPopUpWindow, setShowPopUpWindow] = useState(false);
    const [currentSentences, updateSentences] = useState(apiSentences);
    const [currentPopUp, setPopUp] =
        useState(<AddSentence currentSentences={currentSentences} updateSentences={updateSentences}
                              setShowPopUp={setShowPopUpWindow}/>)

    return (
        <>
            <article className="sentencesPage">
                <section className="sentences">
                {
                    currentSentences.map((sentence, index) => {
                        return <SentenceDisplay key={sentence.id} num={index + 1}
                                                sentence={sentence}
                                                setPopUpWindow = {setPopUp}
                                                switchShowWindow={setShowPopUpWindow}
                                                currentSentences={currentSentences}
                                                updateSentences={updateSentences}
                        />;
                    })
                }
                </section>
                <div className="manageSentencesButtons">
                    <button className='addSentence' onClick={() => {
                        setShowPopUpWindow(true);
                        setPopUp(<AddSentence currentSentences={currentSentences} updateSentences={updateSentences}
                                              setShowPopUp={setShowPopUpWindow}/>);
                    }}>
                        <FontAwesomeIcon icon={faPlus} /> Add new
                    </button>
                    <button className='manageDataButton' onClick={() => {
                        setShowPopUpWindow(true);
                        setPopUp(<ManageData currentSentences={currentSentences} updateSentences={updateSentences}
                                              setShowPopUp={setShowPopUpWindow}/>);
                    }}>
                        <FontAwesomeIcon icon={faDatabase} /> Manage data
                    </button>
                </div>
            </article>
            <PopUpWindow showWindow={showPopUpWindow}>
                { currentPopUp }
            </PopUpWindow>
        </>
    )
}

export default Sentences;
