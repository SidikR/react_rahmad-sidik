import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/global/navbar";
import Todos from "./pages/todo";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Todos />
        </>
    );
}

export default App;
