import "./agregar.css";
import arrowleft from "../assets/arrow-left.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from "react-router-dom";

export default function Agregar() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // const [number, setNumber] = useState("");
  // const [name, setName] = useState("");
  // const [weight, setWeight] = useState("");
  // const [height, setheight] = useState("");
  // const [color, setColor] = useState("");
  // const [typecolor1, setTypecolor1] = useState("");
  // const [typecolor2, setTypecolor2] = useState("");
  // const [description, setDescription] = useState("");
  // const [imagen, setImagen] = useState("");
  // const [hp, setHp] = useState("");
  // const [atk, setAtk] = useState("");
  // const [def, setDef] = useState("");
  // const [spd, setSpd] = useState("");
  // const [satk, setSatk] = useState("");
  // const [sdef, setSdef] = useState("");
  // const [move1, setMove1] = useState("");
  // const [move2, setMove2] = useState("");
  // const [type, setType] = useState("");
  // const [type2, setType2] = useState("");

  // const elnumber = (e) => {
  //   setNumber(e.target.value);
  // };

  // const elname = (e) => {
  //   setName(e.target.value);
  // };
  // const elweight = (e) => {
  //   setWeight(e.target.value);
  // };
  // const elheight = (e) => {
  //   setheight(e.target.value);
  // };

  // const eltypecolor1 = (e) => {
  //   setTypecolor1(e.target.value);
  //   setColor(e.target.value);
  // };

  // const eltypecolor2 = (e) => {
  //   setTypecolor2(e.target.value);
  // };

  // const eldescription = (e) => {
  //   setDescription(e.target.value);
  // };
  // const elimagen = (e) => {
  //   setImagen(e.target.value);
  // };
  // const elhp = (e) => {
  //   setHp(e.target.value);
  // };
  // const elatk = (e) => {
  //   setAtk(e.target.value);
  // };

  // const eldef = (e) => {
  //   setDef(e.target.value);
  // };
  // const elspd = (e) => {
  //   setSpd(e.target.value);
  // };
  // const elsatk = (e) => {
  //   setSatk(e.target.value);
  // };

  // const elsdef = (e) => {
  //   setSdef(e.target.value);
  // };

  // const elmove1 = (e) => {
  //   setMove1(e.target.value);
  // };
  // const elmove2 = (e) => {
  //   setMove2(e.target.value);
  // };
  // const eltype1 = (e) => {
  //   setType(e.target.value);
  // };
  // const eltype2 = (e) => {
  //   setType2(e.target.value);
  // };

  const registrarPokemon = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:3010/pokemon", {
        method: "POST",
        body: JSON.stringify({ ...data, color: data.typecolor1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      navigate(-1);

      console.log("hola");
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="agregar_contenedor">
      {loading ? (
        <SpinnerDotted color={"#ecbc3e"} loading={loading} size={150} />
      ) : (
        <>
          <div className="titulo-agregar">
            <Link to="/">
              <img className="flechita" src={arrowleft} />
            </Link>
            <h1>Crea tu propio pokemon</h1>
          </div>
          <div className="creando-pokemon">
            <form onSubmit={handleSubmit(registrarPokemon)}>
              <div className="nombre-pokemon">
                <label htmlFor="name">Nombre </label>
                <div>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>Error este campo es requerido</span>}
                </div>
                <label htmlFor="number">Numero </label>
                <div>
                  <input
                    type="text"
                    {...register("number", { required: true })}
                  />
                  {errors.number && <span>Error este campo es requerido</span>}
                </div>
              </div>
              <div className="imagen-pokemon">
                <label htmlFor="name">
                  Carga la imagen del pokemon mediante url
                </label>
                <input
                  type="text"
                  {...register("imagen", { required: true })}
                />
                {errors.imagen && <span>Error este campo es requerido</span>}
              </div>
              <div className="peso-tamaño">
                <label htmlFor="height">Altura</label>
                <input
                  className="pesoTamaño"
                  type="number"
                  name=""
                  id=""
                  min="1"
                  max="200"
                  {...register("height", { required: true })}
                />
                {errors.height && <span>Error este campo es requerido</span>}
                <label htmlFor="weight">Peso</label>
                <input
                  className="pesoTamaño"
                  type="number"
                  name=""
                  id=""
                  min="1"
                  max="200"
                  {...register("weight", { required: true })}
                />
                {errors.weight && <span>Error este campo es requerido</span>}
              </div>
              <h1>Stats del pokemon</h1>
              <div className="stats-pokemon">
                <div>
                  <label htmlFor="HP">HP</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="200"
                    {...register("hp", { required: true })}
                  />
                  {errors.hp && <span>campo necesario</span>}
                </div>
                <div>
                  <label htmlFor="ATK">ATK</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="100"
                    {...register("atk", { required: true })}
                  />
                  {errors.atk && <span>campo necesario</span>}
                </div>
                <div>
                  <label htmlFor="DEF">DEF</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="200"
                    {...register("def", { required: true })}
                  />
                  {errors.def && <span>campo necesario</span>}
                </div>
                <div>
                  <label htmlFor="SPE">SPD</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="200"
                    {...register("spd", { required: true })}
                  />
                  {errors.spd && <span>campo necesario</span>}
                </div>
                <div>
                  <label htmlFor="SATK">SATK</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="200"
                    {...register("satk", { required: true })}
                  />
                  {errors.satk && <span>campo necesario</span>}
                </div>
                <div>
                  <label htmlFor="statPokemon">SDEF</label>
                  <input
                    className="statPokemon"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max="200"
                    {...register("sdef", { required: true })}
                  />
                  {errors.sdef && <span>campo necesario</span>}
                </div>
              </div>
              <div className="movimiento-pokemon">
                <label htmlFor="moves">Nombre del primer movimiento</label>
                <div>
                  <input
                    type="text"
                    {...register("move1", { required: true })}
                  />
                  {errors.move1 && <span>Error este campo es requerido</span>}
                </div>
                <label htmlFor="moves">Nombre del segundo movimiento</label>
                <input type="text" {...register("move2")} />
              </div>
              <div className="movimiento-pokemon">
                <label htmlFor="types">Tipo principal</label>
                <div>
                  <input
                    type="text"
                    {...register("type1", { required: true })}
                  />
                  {errors.type1 && <span>Error este campo es requerido</span>}
                </div>
                <label htmlFor="types">Tipo secundario</label>
                <input type="text" {...register("type2")} />
              </div>
              <div className="colores-pokemon">
                <label htmlFor="color-pokemon">Color primario</label>
                <input
                  type="text"
                  {...register("typecolor1", { required: true })}
                />
                {errors.typecolor1 && (
                  <span>Error este campo es requerido</span>
                )}
                <label htmlFor="color2-pokemon">Color secundario</label>
                <input type="text" {...register("typecolor2")} />
              </div>
              <div className="descripcion-pokemon">
                <label htmlFor="description">Descripcion</label>
                <textarea
                  name=""
                  id=""
                  cols="80"
                  rows="7"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span>Error este campo es requerido</span>
                )}
              </div>

              <button type="submit" className="crear">
                Crear
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
