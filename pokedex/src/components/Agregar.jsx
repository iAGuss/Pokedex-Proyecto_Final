import "./agregar.css";
import arrowleft from "../assets/arrow-left.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Agregar() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [color, setColor] = useState("");
  const [typecolor1, setTypecolor1] = useState("");
  const [typecolor2, setTypecolor2] = useState("");
  const [description, setDescription] = useState("");
  const [imagen, setImagen] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [spd, setSpd] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [move1, setMove1] = useState("");
  const [move2, setMove2] = useState("");
  const [type, setType] = useState("");
  const [type2, setType2] = useState("");

  const elnumber = (e) => {
    setNumber(e.target.value);
  };

  const elname = (e) => {
    setName(e.target.value);
  };
  const elweight = (e) => {
    setWeight(e.target.value);
  };
  const elheight = (e) => {
    setheight(e.target.value);
  };

  const eltypecolor1 = (e) => {
    setTypecolor1(e.target.value);
    setColor(e.target.value);
  };

  const eltypecolor2 = (e) => {
    setTypecolor2(e.target.value);
  };

  const eldescription = (e) => {
    setDescription(e.target.value);
  };
  const elimagen = (e) => {
    setImagen(e.target.value);
  };
  const elhp = (e) => {
    setHp(e.target.value);
  };
  const elatk = (e) => {
    setAtk(e.target.value);
  };

  const eldef = (e) => {
    setDef(e.target.value);
  };
  const elspd = (e) => {
    setSpd(e.target.value);
  };
  const elsatk = (e) => {
    setSatk(e.target.value);
  };

  const elsdef = (e) => {
    setSdef(e.target.value);
  };

  const elmove1 = (e) => {
    setMove1(e.target.value);
  };
  const elmove2 = (e) => {
    setMove2(e.target.value);
  };
  const eltype1 = (e) => {
    setType(e.target.value);
  };
  const eltype2 = (e) => {
    setType2(e.target.value);
  };

  const registrarPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:3010/pokemon", {
        method: "POST",
        body: JSON.stringify({
          number,
          name,
          weight,
          height,
          color,
          typecolor1,
          typecolor2,
          description,
          imagen,
          hp,
          atk,
          def,
          spd,
          satk,
          sdef,

          move1,
          move2,
          type,
          type2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      console.log("hola");
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  return (
    <div className="agregar_contenedor">
      <div className="titulo-agregar">
        <Link to="/">
          <img className="flechita" src={arrowleft} />
        </Link>
        <h1>Crea tu propio pokemon</h1>
      </div>
      <div className="creando-pokemon">
        <form action="">
          <div className="nombre-pokemon">
            <label htmlFor="name">Nombre </label>
            <input onChange={elname} type="text" />
            <label htmlFor="name">Numero </label>
            <input onChange={elnumber} type="text" />
          </div>
          <div className="imagen-pokemon">
            <label htmlFor="name">
              Carga la imagen del pokemon mediante url
            </label>
            <input onChange={elimagen} type="text" />
          </div>
          <div className="peso-tamaño">
            <label htmlFor="height">Altura</label>
            <input
              onChange={elheight}
              className="pesoTamaño"
              type="number"
              name=""
              id=""
              min="1"
              max="100"
            />
            <label htmlFor="weight">Peso</label>
            <input
              onChange={elweight}
              className="pesoTamaño"
              type="number"
              name=""
              id=""
              min="1"
              max="100"
            />
          </div>
          <h1>Stats del pokemon</h1>
          <div className="stats-pokemon">
            <div>
              <label htmlFor="HP">HP</label>
              <input
                onChange={elhp}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="ATK">ATK</label>
              <input
                onChange={elatk}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="DEF">DEF</label>
              <input
                onChange={eldef}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="SPE">SPD</label>
              <input
                onChange={elspd}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="SATK">SATK</label>
              <input
                onChange={elsatk}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="statPokemon">SDEF</label>
              <input
                onChange={elsdef}
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
          </div>
          <div className="movimiento-pokemon">
            <label htmlFor="moves">Nombre del primer movimiento</label>
            <input onChange={elmove1} type="text" />
            <label htmlFor="moves">Nombre del segundo movimiento</label>
            <input onChange={elmove2} type="text" />
          </div>
          <div className="movimiento-pokemon">
            <label htmlFor="types">Tipo principal</label>
            <input onChange={eltype1} type="text" />
            <label htmlFor="types">Tipo secundario</label>
            <input onChange={eltype2} type="text" />
          </div>
          <div className="colores-pokemon">
            <label htmlFor="color-pokemon">Color primario</label>
            <input onChange={eltypecolor1} type="text" />
            <label htmlFor="color2-pokemon">Color secundario</label>
            <input onChange={eltypecolor2} type="text" />
          </div>
          <div className="descripcion-pokemon">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              onChange={eldescription}
              name=""
              id=""
              cols="80"
              rows="7"
            ></textarea>
          </div>
          <Link to="/">
            <button onClick={registrarPokemon} className="crear">
              Crear
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
