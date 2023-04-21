import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./paginas/Login"
import AuthLayouts from "./layouts/AuthLayouts"
import Registrar from "./paginas/Registrar"
import NuevoPassword from "./paginas/NuevoPassword"
import OlvidePassword from "./paginas/OlvidePassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AuthLayouts/>}>
          <Route index element={<Login/> } />
          <Route path="registrar" element={<Registrar/>} />
          <Route path="olvide-password" element={<OlvidePassword/>} />
          <Route path="olvide-password/:token" element={<NuevoPassword/>} />
          <Route path="confirmar-cuenta/:id" element={<ConfirmarCuenta/>} />
          </Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App
