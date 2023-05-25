import SentenceDisplay from '../components/SentenceDisplay.tsx';
import { ISentence } from '../interfaces/sentence.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';
import EditSentence from "../components/EditSentence.tsx";
import PopUpWindow from "../components/PopUpWindow.tsx";
import {useState} from "react";

const generateSentence = (num: number): ISentence => {
  return {
      id: num,
      sentence: `This is an example sentence to illustrate the design. ${num}`,
      keyword: `keyword${num}`,
      sentence_start: `start${num}`,
      sentence_end: `end${num}`,
      answer: `answer${num}`
  }
}

const currentSentences: ISentence[] = [
    generateSentence(27), generateSentence(28), generateSentence(29), generateSentence(30),
    generateSentence(31), generateSentence(32), generateSentence(33), generateSentence(34)
];

const handleNewSentence = () => {
    console.log('Adding new sentence');
}

const modifySentence = (id: number, newSentence: ISentence) => {
    const index = currentSentences.findIndex(s => s.id === id);
    currentSentences[index] = newSentence;
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
