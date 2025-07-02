import React from "react";

import { Link, useNavigate } from "react-router";
import { RotatingLines } from "react-loader-spinner";

import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = React.useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  });

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="flex items-center justify-center font-bold ">
        <form
          className="flex flex-1 justify-center items-center flex-col gap-4"
          onSubmit={login}
        >
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            type="submit"
            className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-white w-1/2 py-2"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/signup" className="text-indigo-800 hover:underline">
              <span>Cadastre-se</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
