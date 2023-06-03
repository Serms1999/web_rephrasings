import "../css/App.css";
import Home from "../pages/Home";
import Sentences from "../pages/Sentences";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Exam from "../pages/Exam";
import CustomNavbar from "../layout/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<CustomNavbar />}>
                        <Route index element={<Home />} />
                        <Route path={'sentences'} element={<Sentences />} />
                        <Route path={'exam'} element={<Exam />} />

                        <Route path={'*'} element={<Navigate replace to={'/'} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
