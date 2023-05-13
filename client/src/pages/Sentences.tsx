import SentenceDisplay from '../components/SentenceDisplay.tsx';
import { ISentence } from '../interfaces/sentence.ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/SentencesPage.css';

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

const Sentences = () => {
    return (
        <article className="sentencesPage">
            <section className="sentences">
            {
                currentSentences.map((sentence, index) => {
                    return <SentenceDisplay key={sentence.id} num={index + 1} id={sentence.id} text={sentence.sentence} />;
                })
            }
            </section>
            <button className='addSentence'>
                <FontAwesomeIcon icon={faPlus} /> Add new
            </button>
        </article>
    )
}

export default Sentences;
