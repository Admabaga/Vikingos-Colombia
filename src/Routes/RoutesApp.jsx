import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Us from "../Pages/Us/Us"

const RoutesApp = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nosotros" element={<Us/>}/>
        </Routes>
    )
}

export default RoutesApp