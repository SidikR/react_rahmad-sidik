import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todos from "./components/pages/todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutApp from "./components/pages/about/aboutApp";
import AboutAuthor from "./components/pages/about/aboutAuthor";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Todos />,
        },
        {
            path: "/about-app",
            element: <AboutApp />,
        },
        {
            path: "/about-author",
            element: <AboutAuthor />,
        },
    ]);

    return <RouterProvider router={router} />;
    // return <AboutApp />;
}

export default App;
