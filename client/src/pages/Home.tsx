import Selector from '../components/Selector.tsx';
import { faList, faListCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <Selector iconSource={faList} text={"Sentences"} />
            <Selector iconSource={faListCheck} text={"Exam"} />
        </>
    )
}

export default Home;
