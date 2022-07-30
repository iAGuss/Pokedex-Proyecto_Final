import "./register.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [mail, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //-----------------seteando password y mail-------------------------//
  const elmail = (e) => {
    return setEmail(e.target.value);
  };

  const lapassword = (e) => {
    setPassword(e.target.value);
  };
  const elname = (e) => {
    setName(e.target.value);
  };

  //---------------------------------------------------------------------//
  const registrarUsuario = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:3010/registrar", {
        method: "POST",
        body: JSON.stringify({ mail, password, name }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      navigate("/login");
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  return (
    <div className="contenedorl">
      <h1 className="loginn">Registrate</h1>
      <div className="containerl">
        <div className="screen">
          <div className="screen__content">
            <form className="register" onSubmit={registrarUsuario}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input
                  type="text"
                  name="name"
                  className="login__input"
                  placeholder="User name"
                  onChange={elname}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input
                  type="text"
                  name="email"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={elmail}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>

                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={lapassword}
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Login</span>
              </button>
            </form>
            <div className="social-login">
              <Link to="/">
                <button>Regresar</button>
              </Link>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
