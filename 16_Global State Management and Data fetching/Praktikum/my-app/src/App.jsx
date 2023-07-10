import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todos from "./components/pages/todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutApp from "./components/pages/about/aboutApp";
import AboutAuthor from "./components/pages/about/aboutAuthor";
import NotFound from "./components/pages";
import { store, persistor } from "./store/store";
// import { store, persistor } from "../src/store";

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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} fallback={<NotFound />} />
            </PersistGate>
        </Provider>
    );
}

export default App;
