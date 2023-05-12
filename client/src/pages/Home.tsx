import Selector from '../components/Selector.tsx';
import { faList, faListCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="selectors">
            <Selector iconSource={faList} text={"Sentences"} />
            <Selector iconSource={faListCheck} text={"Exam"} />
        </div>
    )
}

export default Home;
