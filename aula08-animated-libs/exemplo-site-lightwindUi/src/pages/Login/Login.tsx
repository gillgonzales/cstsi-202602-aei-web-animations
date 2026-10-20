import { Link, useNavigate } from "react-router";
import React, { useRef } from "react";
import "./login.css";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function Login() {

  const {setIsLogged} = useAuthContext()

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    };
    console.log({ payload });
    setIsLogged(true);
    alert("Bem Vindo!!")
    navigate("/dashboard");
  };

  return (
    <div className="login__container">
      <div className="form">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1> Entre na sua Conta!!!</h1>
          <input ref={emailRef} type="text" placeholder="Email" name="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p>
            Não tem cadastro? <Link to="/register">Crie uma conta!!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
