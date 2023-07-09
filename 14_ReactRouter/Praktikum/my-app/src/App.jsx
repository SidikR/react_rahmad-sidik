import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todos from "./components/pages/todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutApp from "./components/pages/about/aboutApp";
import AboutAuthor from "./components/pages/about/aboutAuthor";
import NotFound from "./components/pages";

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
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return (
        <RouterProvider router={router} fallback={<NotFound />} /> // Menggunakan komponen NotFound sebagai fallback jika rute tidak ditemukan
    );
}

export default App;
