import Selector from '../components/Selector';
import { faList, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { env } from '../env';

const Home = () => {
    return (
        <>
            <Selector iconSource={faList} text={"Sentences"} />
            <Selector iconSource={faListCheck} text={"Exam"} />
        </>
    )
}

export default Home;
