import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./App";
import Checkout from "./Checkout";
import IniciarSesion from "./IniciarSesion";
import PreRegistro from "./PreRegistro";
import Status from "./Status";

ReactDOM.render(<BrowserRouter>
<Routes>
    <Route path="/" element={<IniciarSesion/>} />
    <Route path="/preregistro" element={<PreRegistro/>} />
    <Route path="/registro" element={<Checkout/>} />
    <Route path="/status" element={<Status/>} />
</Routes>
    </BrowserRouter>, document.getElementById("root"));
