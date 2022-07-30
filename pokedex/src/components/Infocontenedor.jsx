import React, { useState } from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import StraightenIcon from "@mui/icons-material/Straighten";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
// import constantepokemons from "../constantes/listapokemones";
import { Link } from "react-router-dom";
import pokeball from "../assets/Pokeball.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Infocontenedor() {
  const [pokemon, setpokemon] = useState({});
  const { nombrePokemon } = useParams();

  useEffect(() => {
    cargarPokemon();
  }, []);

  const cargarPokemon = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:3010/pokemon/${nombrePokemon}`
      );
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();

      setpokemon(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  return (
    pokemon.name && (
      <div style={{ backgroundColor: pokemon.typecolor1 }} className="div">
        <header style={{ backgroundColor: pokemon.color }}>
          <img className="pokebola" src={pokeball} />
          <nav>
            <div className="nav">
              <Link to="/">
                <img className="flechita" src={arrowleft} />
              </Link>
              <h1>{pokemon.name}</h1>
            </div>

            <p className="number2">{pokemon.number}</p>
          </nav>
          <div className="img">
            <img className="imageni" src={pokemon.imagen} alt="" />
            {false ? (
              <p>
                <Link to={`/contenedor/${1}`}>
                  <ArrowBackIosIcon className="anterior" />
                </Link>
              </p>
            ) : null}
            {false ? (
              <>
                <p></p>
                <p>
                  <Link to={`/contenedor/${1}`}>
                    <ArrowForwardIosIcon className="siguiente" />
                  </Link>
                </p>
              </>
            ) : null}
          </div>
        </header>

        <main className="main">
          <div className="tipos">
            {pokemon.type2 !== "" ? (
              <>
                <span className={pokemon.type}>{pokemon.type}</span>
                <span className={pokemon.type2}>{pokemon.type2}</span>
              </>
            ) : (
              <span className={pokemon.type}>{pokemon.type}</span>
            )}
          </div>

          <h3 className="about" style={{ color: pokemon.color }}>
            About
          </h3>
          <div className="informacion">
            <div>
              <BalanceIcon /> {pokemon.weight} <br />
              Weight
            </div>
            <div className="peso">
              <StraightenIcon /> {pokemon.height} <br />
              Height
            </div>
            <div className="moves">
              {pokemon.move2 !== "" ? (
                <>
                  <span className={pokemon.move}>{pokemon.move}</span>
                  <span className={pokemon.move2}>{pokemon.move2}</span>
                </>
              ) : (
                <span className={pokemon.move}>{pokemon.move}</span>
              )}
            </div>
          </div>
          <br />
          <div className="descripcion">{pokemon.description}</div>
          <div>
            <h3 className="baseStats" style={{ color: pokemon.color }}>
              Base Stats
            </h3>
            <div className="contiene">
              <ul className="lista" style={{ color: pokemon.color }}>
                <li className="lalista">
                  <label className="nombres">{"HP"}</label>
                  <label className="numeros">{pokemon.hp}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.hp / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
                <li className="lalista">
                  <label className="nombres">{"ATK"}</label>
                  <label className="numeros">{pokemon.atk}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.atk / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
                <li className="lalista">
                  <label className="nombres">{"DEF"}</label>
                  <label className="numeros">{pokemon.def}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.def / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
                <li className="lalista">
                  <label className="nombres">{"SATK"}</label>
                  <label className="numeros">{pokemon.satk}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.satk / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
                <li className="lalista">
                  <label className="nombres">{"SDEF"}</label>
                  <label className="numeros">{pokemon.sdef}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.sdef / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
                <li className="lalista">
                  <label className="nombres">{"SPD"}</label>
                  <label className="numeros">{pokemon.sdef}</label>
                  <div className="gus">
                    <div
                      className="agustina"
                      style={{
                        backgroundColor: pokemon.color,
                        width: `${pokemon.sdef / 2}%`,
                      }}
                    ></div>

                    <div style={{ flex: "1" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  );
}
export default Infocontenedor;
