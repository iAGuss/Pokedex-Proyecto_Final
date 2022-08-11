import "./App.css";

import Pokemones from "./components/Pokemones";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Infocontenedor from "./components/Infocontenedor.jsx";
import Login from "./components/Login";
import Register from "./components/Registrar";
import Agregar from "./components/Agregar";
import background from "./assets/Pokemon_all.jpg";

function App() {
  return (
    <div className="App">
      <div className="appcentrar">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pokemones />} />
            <Route
              path="contenedor/:nombrePokemon"
              element={<Infocontenedor />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Register />} />
            <Route path="/agregar" element={<Agregar />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// usestate

// funcion setear estado
