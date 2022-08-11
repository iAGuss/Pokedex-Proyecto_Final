import "./login.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  // const [mail, setEmail] = useState("");

  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleInputChange = (e) => {
  //   return setEmail(e.target.value);
  // };

  // const lapassword = (e) => {
  //   setPassword(e.target.value);
  // };

  //---------------------------------------------------------------------------------------------------------------------------------------------------------

  const elclick = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:3010/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("login exitoso");
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const userFetch = await respuesta.json();
      localStorage.setItem("token", userFetch.token);

      localStorage.token = userFetch.token;
      navigate("/");
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  ///---------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="contenedorl">
      <h1 className="loginn">Login Pokemones</h1>
      <div className="containerl">
        <div className="screen">
          <div className="screen__content">
            <form onSubmit={handleSubmit(elclick)} className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input
                  type="mail"
                  name="email"
                  className="login__input"
                  placeholder="User name / Email"
                  {...register("mail", { required: true })}
                  // onChange={handleInputChange}
                />
                {errors.mail && <span>Error este campo es requerido</span>}
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>

                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  // onChange={lapassword}
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Error este campo es requerido</span>}
              </div>

              <button className="buttonlogin__submit">Login</button>
            </form>
            <div className="social-login">
              <Link to="/">
                <button className="regresar">Regresar</button>
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
export default Login;
