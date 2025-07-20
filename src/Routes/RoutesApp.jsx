import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Us from "../Pages/Us/Us"
import Groups from "../Pages/Groups/Groups"
import Annexes from "../Pages/Annexes/Annexes"
import Events from "../Pages/Events/Events"

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Us />} />
            <Route path="/grupos" element={<Groups />} />
            <Route path="/anexos" element={<Annexes />} />
            <Route path="/eventos" element={<Events />} />
        </Routes>
    )
}

export default RoutesApp