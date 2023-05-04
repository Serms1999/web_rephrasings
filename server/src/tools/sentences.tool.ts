import {ISentence} from '../interfaces/sentences.interface';

const sentencesEqual = (sentence1: ISentence, sentence2: ISentence): boolean => {
    return sentence1.sentence === sentence2.sentence &&
        sentence1.keyword === sentence2.keyword &&
        sentence1.sentence_start === sentence2.sentence_start &&
        sentence1.sentence_end === sentence2.sentence_end &&
        sentence1.answer === sentence2.answer;
}

const checkSentenceOnlyValidChars = (sentence: ISentence): boolean => {
    const pattern = /^([a-zA-Z0-9]+[?!.]? *)+$/;
    for (const value of Object.values(sentence)) {
        if (!value.match(pattern)) {
            return false;
        }
    }
    return true;
}

export { sentencesEqual, checkSentenceOnlyValidChars };
