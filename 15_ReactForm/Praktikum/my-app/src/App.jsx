import { useState } from "react";
import "./App.css";
import Register from "./pages/pendaftaran";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Register />
        </>
    );
}

export default App;
