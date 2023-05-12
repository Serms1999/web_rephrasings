import '../css/App.css';
import Home from "../pages/Home.tsx";
import Sentences from "../pages/Sentences.tsx";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to='/sentences'>
                    Sentences
                </Link>
                <Link to='/'>
                    Home
                </Link>
            </header>
            <Switch>
                <Route path='/sentences'>
                    <Sentences />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
