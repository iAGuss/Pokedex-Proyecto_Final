import { Link } from "react-router-dom";
import "./CartaP.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Pokemon({ pokemon }) {
  // const reload = () => {
  //   window.location.reload(true);
  // };
  const elclick = async (ev) => {
    ev.preventDefault();
    try {
      const respuesta = await fetch(
        `http://localhost:3010/pokemon/${pokemon.name}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("borrar pokemon");
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      window.location.reload(true);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  return (
    <Link to={`/contenedor/${pokemon.name}`}>
      <div className="container">
        <div
          style={{
            backgroundColor: pokemon.color,
          }}
          className="row"
        >
          <span style={{ color: pokemon.color }} className="number">
            {pokemon.number}
          </span>
          <span
            className="borrar-x"
            onClick={elclick}
            style={{ color: pokemon.color }}
          >
            x
          </span>
          <img className="imagen" src={pokemon.imagen} alt="" />
          <h1 className="nombre">{pokemon.name} </h1>
        </div>
      </div>
    </Link>
  );
}
export default Pokemon;
