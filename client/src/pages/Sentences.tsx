import SentenceDisplay from '../components/SentenceDisplay.tsx';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';
import {useState} from "react";
import {getAPISentences} from "../api/api.ts";
import PopUpWindow from "../components/PopUpWindow.tsx";
import AddSentence from "../components/AddSentence.tsx";
import ManageData from "../components/ManageData.tsx";

const apiSentences = await getAPISentences();

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
