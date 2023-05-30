import '../css/App.css';
import Home from "../pages/Home.tsx";
import Sentences from "../pages/Sentences.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Exam from "../pages/Exam.tsx";

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

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;
