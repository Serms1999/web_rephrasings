import '../css/App.css';
import Home from "../pages/Home.tsx";
import Sentences from "../pages/Sentences.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Exam from "../pages/Exam.tsx";
import CustomNavbar from "../layout/Navbar.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

/*
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />

    },
    {
        path: '/sentences',
        element: <Sentences />
    },
    {
        path: '/exam',
        element: <Exam />
    }
])
 */

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
