import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"

const AppsRoutes: React.FC = () => {
  return (
    <>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
        </Routes>
    </>
  )
}

export default AppsRoutes