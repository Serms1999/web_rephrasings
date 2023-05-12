import SentenceDisplay from './SentenceDisplay.tsx';
import '../css/SentencesPage.css';

const SentencesPage = () => {
    return (
        <>
            <SentenceDisplay id={1} text={'This is an example sentence to illustrate the design.'} />
        </>
    )
}

export default SentencesPage;
