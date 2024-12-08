import {useState} from "react";
import Home from "./components/home";
import classes from '/src/modules/App.module.scss'
import Destination from "./components/destination";

const App = () => {
    const [page, setPage] = useState(0)

    return (
        <>
            {page === 0 && <Home setPage={setPage}/>}
            {page === 1 && <Destination setPage={setPage}/>}
        </>
    )
}

export default App