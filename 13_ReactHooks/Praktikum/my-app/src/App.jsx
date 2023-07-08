import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todos from "./components/todos";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Todos />
        </>
    );
}

export default App;
