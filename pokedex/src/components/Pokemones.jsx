import "./pokemones.css";
import Pokemon from "./CartaP";
import React, { useState } from "react";
import pokeball from "../assets/Pokeball.png";
import arrow from "../assets/Arrow.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import agregar from "../assets/pickachumeme.jpg";

function Pokemones() {
  const [pokemon, setpokemon] = useState([]);
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    cargarPokemon();
  }, []);

  const cargarPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:3010/pokemon", {
        headers: { "auth-token": localStorage.token },
      });
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();
      setpokemon(pokemonFetch);
      setpokemons(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  const filtrado = (evento) => {
    const nuevoFiltrado = [...pokemons].filter((element) =>
      element.name.toLowerCase().includes(evento.target.value.toLowerCase())
    );
    setpokemons(nuevoFiltrado);
  };

  const alfabeticamente = () => {
    const listaNueva = [...pokemon].sort((a, z) =>
      a.name.localeCompare(z.name)
    );
    setpokemons(listaNueva);
  };
  const numericamente = () => {
    const listanumerica = [...pokemon].sort((a, z) =>
      a.number.localeCompare(z.number)
    );
    setpokemons(listanumerica);
  };
  const funcionDeOrdenado = () => {
    pokemon[0].number === "001" ? alfabeticamente() : numericamente();
  };
  //-------------------reinicio token------------------------------------------
  const setLocalStorage = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  //-----------------------------------------------------------------------------
  return (
    <>
      <header className="headerr">
        <div className="header">
          <div className="title">
            <img src={pokeball} alt="logo-pokeball" className="pokeball" />
            <h1>Pokédex</h1>
            {localStorage.token ? (
              <button onClick={setLocalStorage}>Salir</button>
            ) : (
              <>
                <Link to="/registrar">
                  <button className="register-boton">Register</button>
                </Link>
                <Link to="/login">
                  <button className="login-boton">Login</button>
                </Link>
              </>
            )}
            {/* <Link to="/login">
              <button className="login-boton">Login</button>
            </Link>
            <Link to="/registrar">
              <button className="register-boton">Register</button>
            </Link>
            <Link to="/">
              <button className="register-boton">Salir</button>
            </Link> */}
          </div>

          <div className="title2">
            <span className="az">
              {" "}
              <span>A</span>
              <span>Z</span>
            </span>
            <img
              onClick={funcionDeOrdenado}
              src={arrow}
              alt="flecha"
              className="flecha"
            />
          </div>
        </div>
        <div className="delInput">
          <input
            onChange={filtrado}
            type="text"
            name=""
            id="jeje"
            placeholder="Buscar"
          />
        </div>
      </header>
      <main>
        {localStorage.token ? (
          <div className="contenedor_nuevo">
            <Link to="/agregar">
              <img className="pokemon-agregar" src={agregar} alt="" srcset="" />
            </Link>
            <Link to="/agregar">
              <button className="agregar-pokemon">Agregar pokemon</button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="crea-tu-pokemon">
              Para crear tu pokemon debes logearte
            </button>
          </Link>
        )}
        {pokemons ? (
          <div className="container">
            {pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        ) : null}
      </main>
    </>
  );
}

export default Pokemones;
